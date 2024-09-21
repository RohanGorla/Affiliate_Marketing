import "dotenv/config";
import express from "express";
import cors from "cors";
import mysql from "mysql2";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

const bucketName = process.env.BUCKET_NAME;
const bucketRegion = process.env.BUCKET_REGION;
const accessKey = process.env.ACCESS_KEY;
const secretKey = process.env.SECRET_KEY;

const s3 = new S3Client({
  region: bucketRegion,
  credentials: {
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  },
});

const db = mysql.createConnection({
  database: process.env.DATABASE,
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("Database connected");
});

app.get("/", (req, res) => {
  db.query("select * from product_data", async (err, data) => {
    if (err) {
      console.log("error is -> ", err);
      return res.send(err);
    }
    for (const product of data) {
      const getObjectParams = {
        Bucket: bucketName,
        Key: product.image_tag,
      };
      const command = new GetObjectCommand(getObjectParams);
      const url = await getSignedUrl(s3, command, { expiresIn: 60 });
      product.image_url = url;
    }
    console.log(data);
    res.send(data);
  });
});

app.post("/addProduct", async (req, res) => {
  const file_type = req.body.fileType;
  console.log(file_type);
  const product_name = req.body.name;
  const Key_Name = req.body.key;
  const product_category = req.body.cat;
  const product_company = req.body.company;
  const MRP = req.body.mrp;
  const final_price = req.body.price;
  const discount = req.body.discount;
  const product_url = req.body.url;
  const extention = file_type.split("/")[1];
  const key = `affiliate/${Key_Name}-${Date.now()}.${extention}`;
  //   console.log(
  //     key,
  //     file_type,
  //     product_name,
  //     product_company,
  //     product_category,
  //     MRP,
  //     final_price,
  //     product_url
  //   );
  const params = {
    Bucket: bucketName,
    Key: key,
    ContentType: file_type,
  };
  const command = new PutObjectCommand(params);
  const URL = await getSignedUrl(s3, command);
  const values = [
    product_name,
    product_category,
    product_company,
    MRP,
    final_price,
    discount,
    key,
    product_url,
  ];
  db.query(
    "insert into product_data (product_name, product_category, company_name, product_mrp, offer_price, product_discount, image_tag, product_url) values (?)",
    // "insert into product_data (product_name, product_category, company_name, product_mrp, offer_price, product_url) values (?)",
    [values],
    (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      } else {
        console.log(data);
        // res.send("Done");
        res.json(URL);
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

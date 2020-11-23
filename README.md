# Etsy-SellerDescription

## Description
This is the seller description module of the mockup of popular e-commerce website Etsy.com. This project uses software-oriented architecture to combine independent modules with their own server & database into one application.

## Demo
![Getsy Demo](https://media.giphy.com/media/M95NBzPUDTPwpKnnKy/giphy.gif)

## How to populate the database
1. If you haven't yet, run `npm install` in the terminal in the root directory.
2. Go to the config directory and fill in your login info for mysql. Then change the file name from `db.example.js` to `db.js`
3. Next, go to the db directory and run `mysql -u 'FILL IN USERNAME' -p 'FILL IN PASSWORD' < schema.sql`
4. Finally in the same directory you can run `node seed.js` or go back to the root directory and type `npm run seed`.

## Starting the Server
1. In the root directory, type `npm run start`

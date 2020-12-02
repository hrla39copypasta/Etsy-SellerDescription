# Etsy-SellerDescription

## Description
This is the seller description module of the mockup of popular e-commerce website Etsy.com. This project uses software-oriented architecture to combine independent modules with their own server & database into one application.

![Getsy Screenshot](https://res.cloudinary.com/alvindelito/image/upload/c_scale,w_600/v1605631149/getsy-displayPicture_ewmhpk.jpg)

## Tech-Stack
<ul>
  <li>React</li>
  <li>Node.js</li>
  <li>Express</li>
  <li>MySQL</li>
</ul>

## How to populate the database
1. If you haven't yet, run `npm install` in the terminal in the root directory.
2. Go to the config directory and fill in your login info for mysql. Then change the file name from `db.example.js` to `db.js`
3. Next, go to the db directory and run `mysql -u 'FILL IN USERNAME' -p 'FILL IN PASSWORD' < schema.sql`
4. Finally in the same directory you can run `node seed.js` or go back to the root directory and type `npm run seed`.

## Starting the Server
1. In the root directory, type `npm run start`

## Video Demo:

<details>
<summary>Navbar & Product Display</summary>
<br>

![demo gif](https://media.giphy.com/media/4nyPWZ6zVIiU8mmpCw/giphy.gif)
</details>

<details>
<summary>Reviews</summary>
<br>

![demo gif](https://media.giphy.com/media/FOxZsGkX9TmiGB41fr/giphy.gif)
</details>

<details>
<summary>Shipping & Seller Info</summary>
<br>

![demo gif](https://media.giphy.com/media/5AdWTLZKGAK4ptCjji/giphy.gif)
</details>

<details>
<summary>Seller Store & Related Items (Click link to view)</summary>
<br>

[demo gif](https://media.giphy.com/media/Gq9TD5Py840rYYecZg/giphy.gif)
</details>
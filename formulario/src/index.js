const express = require("express");
const path = require("path");
const app = express();
const hbs = require("express-handlebars");
const Sequelize = require("sequelize");
const bp = require("body-parser");
require("dotenv").config();

// Config
    // Template Engine
        app.engine("handlebars", hbs.create({
            defaultLayout: "main"
        }).engine);
        app.set("view engine", "handlebars"); // Isso define a extensão dos arquivos de template
        app.set("views", path.join(__dirname, "views")); // Isso define o caminho da pasta onde estão os templates
    
    // Body Parse
        app.use(bp.urlencoded({extended: false}));
        app.use(bp.json());
    
    // Conexão MySql
        const sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASS,
            {
                host: process.env.DB_HOST,
                dialect: process.env.DB_DIALECT
            }
        );

    // Rotas 
    app.get("/cadastro", (req, res) => {
        res.render("formulario");
    })

    app.post("/envios", (req, res) => {
        const titulo = req.body.titulo;
        console.log(titulo);
        res.send("Dados enviados");
    });

app.listen((8585), () => {
    console.log("Porta 8585");
});
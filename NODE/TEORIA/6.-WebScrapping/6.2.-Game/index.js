const puppeteer = require("puppeteer");
const fs = require("fs");

const scrapping = async () => {
  const BASE_URL = "https://www.game.es/buscar/brv/o=7&cf=000a_aa0211:5:GIDS";

  /// crear el navegador para que incie maximizado

  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });

  // abrir el navegador

  const page = await browser.newPage();

  /// hay que meterle la url en el navegador en la pagina que acabamos de abrir

  await page.goto(BASE_URL); // aqui abro la pagina con la url que tengo como const
  await page.waitForTimeout(4000); /// aqui le digo que espere 4 segundos

  ///!!! Vamos a hacer scrolll para que tengamos el mayor numero de elementos en pantalla

  //Baje hasta el fondo pillando el elemento a donde queremos viajar
  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  await page.waitForTimeout(4000);

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });
  await page.waitForTimeout(4000);

  await page.evaluate(() => {
    const element = document.getElementById("l-footer");
    const y = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: y });
  });

  /// debemos esperar que tengamos los elementos de la busqueda pintados en el dom

  await page.waitForSelector(".search-item");

  // vamos a guardar los datos cuando ya estan disponibles
  const title = await page.$$eval("a.cm-txt", (nodes) =>
    nodes.map((n) => n.innerText)
  );

  const images = await page.$$eval(".img-responsive", (nodes) =>
    nodes.map((n) => n.src)
  );

  const prices = await page.$$eval("div.buy--price", (nodes) =>
    nodes.map((n) => n.innerText)
  );
  /// como todos tienen la mismo longuitud del array, porque todos apuntan a las figuras, podemos recoger inicialmente
  // cualquiera de los tres porque el index lo van a compartir
  const GAMESPRODUCTS = title.map((item, index) => ({
    title: title[index],
    img: images[index],
    price: prices[index],
  }));

  // borrar el ultimo elemento
  GAMESPRODUCTS.pop();

  // convertimos a texto plano
  const gameToString = JSON.stringify(GAMESPRODUCTS);

  fs.writeFile("prueba.json", gameToString, () => {
    console.log("archivo escrito 👌");
  });

  await browser.close();
};

scrapping();

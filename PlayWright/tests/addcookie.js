// add a cookie

await context.addCookies([{

  name: 'session',

  value: 'abc123',

  domain: 'app.example.com',

  path: '/',

}]);



// read cookies

const cookies = await context.cookies();



// clear all cookies

await context.clearCookies();


// set localStorage directly via page evaluation

await page.evaluate(() => {

  localStorage.setItem('feature_flag', 'enabled');

});
//const puppeteer = require('puppeteer')
// const sessionFactory = require('./factories/sessionFactory')
// const userFactory = require('./factories/userFactory')
const Page = require('./helpers/page')
let page,browser
beforeEach(async()=>{
    // browser = await puppeteer.launch({
    //     headless:false
    // })
    //page = await browser.newPage()
    page = await Page.build()
    await page.goto('http://localhost:3000/')

})

afterEach(async()=>{
    await page.close()
})

test('Header has the correct text',async ()=>{
    
    //const text = await page.$eval('a.left.brand-logo',el => el.innerHTML)
    const text = await page.getContentsOf('a.left.brand-logo')
    expect(text).toEqual('Blogster')
}) 

test('clicking login starts oauth flow',async ()=>{
    //clicking the login button
    await page.click('.right a')
    
    const url = await page.url()
    expect(url).toMatch(/accounts\.google\.com/)
})

test('When singns in, shows logout button',async ()=>{
    //const id = "607b105c515abf3728b680b5"
    // const user =await userFactory()
    // console.log(user)
    // const {session, sig} = sessionFactory.sessionFac(user)
   
    // await page.setCookie({name : 'session', value: session})
    // await page.setCookie({name:'session.sig',value: sig})
    // await page.goto('http://localhost:3000/')
    // await page.waitFor('a[href="/auth/logout"]')

    await page.login()

    //const text = await page.$eval('a[href="/auth/logout"]',el=>el.innerHTML)
    const text = await page.getContentsOf('a[href="/auth/logout"]')
    expect(text).toEqual('Logout')
})
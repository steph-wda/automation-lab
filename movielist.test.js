const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async() => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll( async() => {
    await driver.quit()
})


 
describe('Testing if movieList works',()=>{
    
    test('add movie',async()=>{
        await driver.findElement(By.xpath('//input')).sendKeys('Big\n')
        await driver.sleep(2000)
        const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.isDisplayed()
        expect(displayed).toBeTruthy()
    })
    
    test('add 2nd movie',async()=>{
        await driver.findElement(By.xpath('//input')).sendKeys('Enough\n')
        await driver.sleep(2000)
        const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.isDisplayed()
        expect(displayed).toBeTruthy()
    })

    test('add 3rd movie' ,async()=>{
        await driver.findElement(By.xpath('//input')).sendKeys('Nope\n')
        await driver.sleep(2000)
        const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.isDisplayed()
        expect(displayed).toBeTruthy()
    })

    test('add 4th movie',async()=>{
        await driver.findElement(By.xpath('//input')).sendKeys('The Hills Have Eyes\n')
        await driver.sleep(2000)
        const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.isDisplayed()
        expect(displayed).toBeTruthy()
    })

    test('remove items',async()=>{
        await driver.findElement(By.xpath('//li//span')).click()
        await driver.sleep(2000)
        let checked =  await driver.findElement(By.xpath('//li//span')).getAttribute('class')
        expect(checked).toBe('checked')
    })

    test('remove items',async()=>{
        await driver.findElement(By.xpath('//li//span')).click()
        await driver.sleep(2000)
        let checked =  await driver.findElement(By.xpath('//li//span')).getAttribute('class')
        expect(checked).toBe('')
    })

    test('remove items',async()=>{
        await driver.findElement(By.xpath('//li//span')).click()
        const displayed = await driver.findElement(By.xpath('//main/aside')).getText()
        expect(displayed).toBe('Big watched!')
    })

    test('remove message works',async()=>{
        await driver.findElement(By.xpath('//li//span')).click()
        const displayed = await driver.findElement(By.xpath('//main/aside')).getText()
        expect(displayed).toBe('Big added back!')
    })

    test('delete Enough works',async()=>{
        await driver.findElement(By.xpath('(//main/ul/li/button)')).click()
        await driver.sleep(2000)
        const input = await driver.findElement(By.xpath('//input')).getText()
        expect(input).toBe('')
    })

    


})
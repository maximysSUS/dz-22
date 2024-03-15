const get = document.querySelector('.getB')
const post = document.querySelector('.postB')


const getData = url => {
   return new Promise((resolve, reject) =>
      fetch(url)
         .then(response => response.json())
         .then(json => resolve(json))
         .catch(error => reject(error))
   )
}

const postData = (url, product) => {
   return new Promise((resolve, reject) =>
      fetch(url, {
         method: 'POST',
         body: JSON.stringify(product),
         headers: { 'Content-type': 'application/json; charset=UTF-8' }
      })
         .then(response => response.json())
         .then(json => resolve(json))
         .catch(error => reject(error))
   )
}

post.addEventListener('click', async () => {
   try {
      app.get('/getData', (req, res) => {
         let data = fs.readFileSync(createPath('data', 'data', 'json'))
         data = JSON.parse(data)
         res.send(data)
      })
      await postData('http://localhost:3000/addData', {
         name: 'Иван',
         age: 35
      }).then(response => {
         console.log(response, 'данные успешно добавлены')
      })
   } catch (error) {
      console.error(error)
   }
})

button2.addEventListener('click', async () => {
   try {
      const products = await getData('http://localhost:3000/getData')
      console.log(products)
   } catch (err) {
      console.error(err)
   }
})
const Home = {
  index (request, response) {
    response.json({
      name: 'Italo',
      'email': 'italo@gmail.com'
    })
  }
}

export default Home
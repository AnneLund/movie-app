export const getStaticPaths = async () => {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=85107a696f712b5b683bd5a4f10afc16');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.genres.map(item => {
    
      return {
        params: { id: item.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
  
    const id = context.params.id;
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=85107a696f712b5b683bd5a4f10afc16/' + id);
    const data = await res.json();


    return {
      props: { item: data }
    }
  }


const Details = ({item}) => {
console.log(item)

    return (
        <section key={item.id} className="details">
            
<p>hej</p>


</section>
    )

   
}
export default Details;
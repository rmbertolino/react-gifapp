
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=J9B75LBWy2PcLsQ1WK10lfnVn7w4IzGi`;
    const response = await fetch ( url );
    const { data } = await response.json(); //hago desestructuracion para traer solo el array data

    //Recorro todas las imagenes de data. img es un array y parsea solo lo que necesito
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url, //? Indica que si viene el dato lo parseo de lo contrario no
        }
    })

    return gifs;
}
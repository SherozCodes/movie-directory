
module.exports = (card , product) => {
    let output = card.replace(/{%IMAGE%}/g , product.image);
    output = output.replace(/{%ID%}/g , product.id);
    output = output.replace(/{%TITLE%}/g , product.title);
    output = output.replace(/{%GENRE%}/g , product.genre);
    output = output.replace(/{%RATING%}/g , product.rating);

    return output
}


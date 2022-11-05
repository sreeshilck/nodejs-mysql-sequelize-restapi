module.exports = (sequelize, Datatypes) => {
    
    const Review = sequelize.define("review", {
        
        rating: {
            type: Datatypes.INTEGER,

        },
        description: {
            type: Datatypes.TEXT,

        },
        productID: {
            type: Datatypes.INTEGER
        }

    })

    return Review;
}
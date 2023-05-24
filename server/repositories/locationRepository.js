const Locations = require('./model');
const { db, Functions } = require('./db_context.js');
const ObjectID = db.mongoose.Schema.Types.ObjectID;

async function insertMockLocation() {
    const data = [
        {
            title: 'VITABERGSPARKEN',
            category: ObjectID('646d2895bcbca72e55be7afd'),
            description:
                'A beautiful perfect picnic park, with beautiful walking paths among tall trees and across the meadows. There is also a lot of inspiring architecture here, such as the eco-temple, the copper tents and yes, Haga Castle, of course.',
            coordinates: {
                latitude: 59.35666524,
                longitude: 18.0333332
            }
        },
        {
            title: 'IVAR LOS PARK',
            category: ObjectID('646d2895bcbca72e55be7afd'),
            description:
                'Picnic with a view! Ivar Los Park is located on Södermalm with a beautiful view of Stockholm. Here you sit on grass and most of the park is on a slope.',
            coordinates: {
                latitude: 51.1234,
                longitude: 0.5678
            }
        },
        {
            title: 'SKINNARVIKSBERGET',
            category: ObjectID('646d2895bcbca72e55be7afd'),
            description:
                'Skinnarviksberget is located with beautiful view of Stockholm. The view from here is unbeatable - you can see all over Stockholm and beyond. Offers plenty of seating on the mountain. Recommended afternoon and evening.',
            coordinates: {
                latitude: '59.334591',
                longitude: 18.06324
            }
        },
        {
            title: 'TANTOLUNDEN',
            category: ObjectID('646d2895bcbca72e55be7afd'),
            description:
                'A beautiful large park in Hornstull. The park offers picnic facilities in large parts of the park, ',
            coordinates: {
                latitude: 59.334591,
                longitude: 18.06324
            }
        },
        {
            title: 'ROLAMBSHOVSPARKEN',
            category: ObjectID('646d2895bcbca72e55be7afd'),
            description:
                "In the middle of central Stockholm on Kungsholmen, you will find Rålambshovsparken, which is one of Stockholm's most popular parks during the summer. With its fantastic view of Riddarfjärden",
            coordinates: {
                latitude: 59.323998704,
                longitude: 18.02083325
            }
        }

    ]
    try {
        const result = await Functions.insertManyLocations(data);
        console.log(result);
    } catch (error) {
        console.error(error);
        return error;
    }
}
async function getAllLocations() {
    
}

module.exports = {
    insertMockLocation,
    getAllLocations
};

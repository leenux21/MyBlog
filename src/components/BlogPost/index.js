import React from 'react';
import { Card } from 'react-bootstrap';
import './style.css';

import food from '../../photos/food.jpg';

const BlogPost = props => {

    console.log(props);



    return (
        
            <Card>
                <Card.Body>
                    <div className="blogHeader">
                        <span>Featured</span>
                        <h3>Food</h3>
                        <span>posted on this,by this</span>
                    </div>
                    <div className="blogImage">
                        <img src={food} alt="blog"/>
                    </div>
                    <div className="blogBody">
                        <p>
                        Food is any substance[1] consumed to provide nutritional support for an organism. Food is usually of plant or animal origin, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth.

                        Historically, humans secured food through two methods: hunting and gathering and agriculture, which gave modern humans a mainly omnivorous diet. Worldwide, humanity has created numerous cuisines and culinary arts, including a wide array of ingredients, herbs, spices, techniques, and dishes.
                        </p>
                    </div>
                </Card.Body>
            </Card>
        
    );
}

export default BlogPost;
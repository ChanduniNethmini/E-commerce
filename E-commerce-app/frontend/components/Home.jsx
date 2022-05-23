import React from 'react';
import Itemcard from './Itemcard';
import data from './data';

const Home = () => {


    return (
        <div>
            <h1 className="text-center mt-3">All Items</h1>
            <a href="/additems">Item Details</a><br/>
            <a href="/adduser">User Details</a><br/>
            <a href="/addtrader">Trader Details</a><br/>
            <a href="/addpromotion">Promotion Details</a><br/>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index) => {
                        return (
                            <Itemcard 
                                img={item.img}
                                title={item.title}
                                desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index} />
                        )
                    })}
                </div>
            </section>
        </div>
    );
}

export default Home;
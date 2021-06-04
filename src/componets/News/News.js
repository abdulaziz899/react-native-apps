import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import "./Styles";
const News = () => {
    const URL=`https://newsapi.org/v2/everything?q=Apple&from=2021-06-04&sortBy=popularity&apiKey=b81d22f04ec14cd6a0a99527f0693547`;
    const [news,setNews]=useState([]);
    useEffect(()=>{
        fetch(URL)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.articles);
            setNews(data.articles)
        })
    },[])
    return (
        <View>
            <Text>{news.length}</Text>
            <View>
                {
                    news.map(news=>{
                        return(
                            <View >
                                <Text style={container.title} key={news.source.id}>{news.source.name}</Text>
                                <Text>{news.description}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
};

export default News;

const container=StyleSheet.create({
    title:{
        color:"green",
    }
})
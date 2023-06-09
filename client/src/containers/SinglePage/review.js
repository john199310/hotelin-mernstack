import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { ReviewWrapper, AvtarImage, AuthorImage, CommentBody, ReviewAuthor, GivenStar, Comment } from './singleStyle';

export default function Review({data}) {
    return (
        <ReviewWrapper>
            <AvtarImage>
                <AuthorImage src={data.image} alt={data.name}/>
            </AvtarImage>
            <CommentBody>
                <ReviewAuthor>{data.name}</ReviewAuthor>
                <GivenStar>{data.rating} <AiFillStar style={{color:'#FAD02C'}}/></GivenStar>
                <Comment>{data.review}</Comment>
            </CommentBody>
        </ReviewWrapper>
    )
}

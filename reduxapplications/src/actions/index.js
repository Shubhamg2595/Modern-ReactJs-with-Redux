import jsonPlaceholder from '../api/jsonPlaceholder'

export const fetchPosts =  () =>
{
    const promise =  jsonPlaceholder.get('./posts')
    return{
        type:'FETCH_POSTS',
        payload:promise 
    }
}

/*
above is a bad approach for redux development,

bcoz in above code we are using 'async await' functions that 
changes the code which is transpiled in es2015 and hence the
resulted code  is not plain javascript object anymore
which is must for any action creator with type and payload property

But if we remove async await from our action creator,
we will actually get a plain js Object but then we wont
actually receive any response, instead we will be
receiving a 'promise' object that is going to give
us access to our data when we eventually get it at some point 
in the future


*/
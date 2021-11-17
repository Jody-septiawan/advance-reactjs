import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

// import necessary hooks from react-router-dom
import { useParams } from 'react-router-dom';

const DetailUser = () => {
  const [data, setData] = useState(null);

  // call that hooks here and store to variable
  const params = useParams();

  // don't worry about this, we'll cover later
  useEffect(() => {
    const { id } = params;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });

    // return () => {
    //   setData(null);
    // };
  }, []);

  console.log('test render');

  return (
    // code element inside Container
    // display information that stored in data
    // console.log first to see what information that you get from fetching
    <Container className="text-center">
      <h1>Data user with parameter {params.id} is</h1>
      <p>{data?.name}</p>
      <p>{data?.username}</p>
      <p>{data?.email}</p>
      <p>{data?.website}</p>
      <p>{data?.address.city}</p>
    </Container>
  );
};

export default DetailUser;

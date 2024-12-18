function Error({ statusCode }: { statusCode: number }) {
    return (
      <p>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An error occurred on client"}
      </p>
    );
  }

  export default Error;

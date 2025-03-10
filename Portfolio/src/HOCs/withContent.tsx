import React from "react";

const withContent = (WrappedComponent: React.ComponentType<any>) => {
  return ({ data }: { data: any }) => {
    if (!data) {
        return <p className="text-gray-500">Cliquez sur une section pour voir le contenu.</p>;
      }
    console.log("data ", data)
    return (
      <div>
        <h2>{data.title}</h2>
        <ul>
        {data.description && data.description.map((item:string, index:number)=> (
            <li key={index}>{item}</li>
        ))}
        </ul>
        <WrappedComponent data={data} />
      </div>
    );
  };
};

export default withContent;

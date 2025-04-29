import TailProperties, { cn } from "@/styles/TailProperties";
import DefaultProps from "@/utils/DefaultProps";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryFunction } from "@/utils/fetch/ReusableFetchs";

export function CommonComponent({ className }: DefaultProps<never>) {
  // Styling for the component
  const style: TailProperties = {
    box: "w-24 h-24  md:w-16 md:h-16",
    layout: "flex",
  }; // style
  // RenderedComponent the component
  return <div className={`${cn(style)} ${className}`}></div>;
} // CommonComp()

type PresenterDataType = { age: number; name: string };

export function Presenter({
  data,
  className,
}: DefaultProps<PresenterDataType>) {
  // Return nothing if no data is provided
  if (!data) return <></>;
  // Styling for the container
  const style: TailProperties = {
    box: "w-fit h-fit",
    typo: "font-bold text-xs",
  }; // style
  // RenderedComponent the component
  return (
    <section className={`${cn(style)} ${className}`}>
      <h1>{`age: ${data.age}\nname: ${data.name}`}</h1>
    </section>
  );
} // Presenter()

export function RQ_FetchContainer({ className }: DefaultProps<never>) {
  // Use React Query to manage data fetching state
  const { data, isLoading, isError } = useQuery({
    // Fetch function
    queryFn: async () => await queryFunction("/some/api"),
    queryKey: ["github-profile"], // Cache key for query
  }); // useQuery()
  // If data is loading or an error occurred, render nothing
  if (isLoading || isError) return <></>;
  // Render the Presenter component with fetched data
  return (
    <div className={className}>
      <Presenter data={data} />
    </div>
  );
} // GithubProfile(Container)

export function VANILA_FetchContainer({ className }: DefaultProps<never>) {
  // State to hold fetched data
  const [data, setData] = useState<any>([]);
  // State to track loading status
  const [load, setLoad] = useState<boolean>(true);
  /* useEffect:
   * Fetches data from the API endpoint when the component mounts.
   * Updates the `data` and `load` states based on the response.*/
  useEffect(() => {
    fetch("/some/api") // Fetch data from the API
      .then((res) => res.json()) // Parse the JSON response
      .then((data) => {
        setData(data); // Update state with the fetched data
        setLoad(false); // Set loading state to false
      });
  }, []); // Empty dependency array ensures this effect runs only once on mount
  // RenderedComponent nothing if data is still loading
  if (load || !data) return <></>;
  // RenderedComponent the Presenter component with the fetched data
  return (
    <div className={className}>
      <Presenter data={data} />
    </div>
  );
} // VANILA_FetchingContainer()

export function ListRenderer({ data, render, className }: DefaultProps<any[]>) {
  // Return an empty fragment if no data or render function is provided
  if (!data || !render) return <></>;
  // Array to hold rendered elements
  const renderArray: React.ReactElement[] = [];
  // Iterate over the data array and use the render function to generate elements
  data.forEach((element: any, index: number) => {
    renderArray.push(render(element, index)); // Call the render function for each element
  });
  // Return the array of rendered elements
  return renderArray;
} // ListRenderer()

export function PresenterList({
  data,
  className,
}: DefaultProps<PresenterDataType[]>) {
  // Render function for individual Presenter components
  const render = (data: any, key: any) => <Presenter data={data} key={key} />;
  // Render the list using ListRenderer
  return (
    <section className={className}>
      {ListRenderer({ data: data, render: render })}
    </section>
  );
} // RenderedComponent()

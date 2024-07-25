import Link from "next/link";

export default function Home() {
  const DataFetching = [
    {
      title: "getServerSideProps",
      description:
        "Fetch data on each request. It returns JSON and pass data as props. It runs on every request.",
      link: "/server-side-props",
    },
    {
      title: "getStaticProps",
      description:
        "Fetch data only on the build time nd cannot use for the dynamic routes because api call runs in the build time so the data cannot be changed on request.",
      link: "/static-props",
    },
    {
      title: "getStaticPaths",
      description:
        "It can be used for dynamic routes. If we use satisprops and we need dynamic routes for request we can use staticpaths. It runs on every request.",
      link: "/static-paths",
    },
    {
      title: "client-side fetching",
      description:
        "It can be used when we dont need pre-render data and fetch data on client side.",
      link: "/client-side",
    },
    {
      title: "Incremental Static Regeneration(ISR)",
      description:
        "It can be used when we need the staticprops to re-run and fetch data after some time.",
      link: "/incremental-static-regeneration",
    },
  ];

  return (
    <div className=" p-5">
      <div className=" pb-6">
        <p className=" text-xl font-bold underline">Data Fetching Concepts</p>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 jus">
        {DataFetching?.map((data, index) => (
          <div
            key={index}
            className=" border-2 p-3 rounded-md flex justify-between flex-col gap-4"
          >
            <p className=" text-lg font-semibold text-red-500">{data?.title}</p>
            <p className="text-sm">{data?.description}</p>
            <div className=" w-full flex justify-end">
              <Link
                href={data?.link}
                className=" bg-violet-600 w-fit px-2 py-1 rounded"
              >
                Click
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

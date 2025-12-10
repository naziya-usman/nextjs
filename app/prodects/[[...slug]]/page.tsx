// Inside your Client Component:

const product = async ({
    params, searchParams
}: {
    params: Promise<{ slug?: string[] }>
    searchParams: Promise<{ sortOrder?: string }>
}) => {

    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;

   const slugValue =resolvedParams.slug ? resolvedParams.slug[0] : undefined;
   const sortOrderValue = resolvedSearchParams.sortOrder;
    console.log("product - params",slugValue  )
    console.log("product - searchParams" , resolvedSearchParams.sortOrder)
    return (
        <div>
            <h2>Products Page  :{slugValue} </h2>
            <p>Query parameter sortOrder : {sortOrderValue }</p>
        </div>
    )
}

export default product
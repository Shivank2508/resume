


export default async function Page({
    params,
}: {
    params: Promise<{ projectsid: string }>
}) {
    const projectsid = (await params).projectsid
    return <div className="p-4 d-flex flex-column gap-3">
        <div className="fs-2 fw-semibold">{projectsid}</div>
        <hr className="border border-warning border-3 rounded-pill opacity-50 w-10" />
    </div>


}
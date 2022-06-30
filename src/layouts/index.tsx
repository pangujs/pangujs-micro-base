import { MicroApp, Outlet } from "@umijs/max"

export default () => {
  return (
    <>
    <MicroApp name="pangujs-micro-nav" />
    <main>
      <Outlet />
    </main>
    </>
  )

}
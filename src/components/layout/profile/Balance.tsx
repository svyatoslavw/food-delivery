import React from "react"

const Balance = () => {
  return (
    <div className={"flex flex-col gap-2"}>
      <h3 className={"font-semibold text-xl"}>Your Bonus Balance</h3>
      <div className={"w-full h-32 flex justify-center items-center rounded-xl bg-gradient-custom"}>
        <div className={"bg-background px-6 py-3 rounded-xl"}>
          <h5 className={"text-sm"}>Balance</h5>
          <p className={"text-3xl font-bold"}>$123.45</p>
        </div>
      </div>
    </div>
  )
}

export { Balance }

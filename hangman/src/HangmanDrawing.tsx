const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "49px",
      right: "-20px"
    }}
  />
)

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "99px",
      right: "0px"
    }}
  />
)

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom"
    }}
  />
)

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom"
    }}
  />
)

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "190px",
      right: "-90px",
      rotate: "60deg",
      transformOrigin: "left bottom"
    }}
  />
)

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "190px",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "right bottom"
    }}
  />
)

const BODY_PARTS = [ HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses : number
}

export function HangmanDrawing({ numberOfGuesses } :
  HangmanDrawingProps ){
  return (
  <div className="relative">
    {BODY_PARTS.slice(0, numberOfGuesses)}
    <div
      className="h-[50px] w-[10px] bg-black absolute top-0 right-0"
    />
    <div
      className="h-[10px] w-[200px] bg-black ml-[120px]"
    />
    <div
      className="h-[400px] w-[10px] bg-black ml-[120px]"
    />
    <div className="h-[10px] w-[250px] bg-black"/>
</div>
  )
}

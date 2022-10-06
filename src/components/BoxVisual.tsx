import clsx from "clsx";

type IcomingBoxVisualProps = {
  width: number;
  height: number;
};

const BoxVisual = ({ width, height }: IcomingBoxVisualProps) => {
  const scaleX = height >= width ? width / height : 1;
  const scaleY = height >= width ? 1 : height / width;

  return (
    <>
      <div className="scene">
        <div className="cube relative h-[200px] w-[200px]">
          <div
            className={clsx(
              "front absolute grid place-items-center border-2 border-black bg-transparent/25 text-3xl text-white",
              "h-[200px] w-[200px]"
            )}
          >
            front
          </div>
          <div
            className={clsx(
              "right absolute grid place-items-center border-2 border-black bg-indigo-200/50 text-3xl text-white",
              "h-[200px] w-[200px]"
            )}
          >
            right
          </div>
          <div
            className={clsx(
              "back absolute grid place-items-center border-2 border-black bg-indigo-200/70",
              "h-[200px] w-[200px]"
            )}
          ></div>
          <div
            className={clsx(
              "left absolute grid place-items-center border-2 border-black bg-indigo-200/50 text-3xl text-white",
              "h-[200px] w-[200px]"
            )}
          >
            left
          </div>
          <div
            className={clsx(
              "top absolute grid place-items-center border-2 border-black bg-indigo-200/50 text-3xl text-white",
              "h-[200px] w-[200px]"
            )}
          >
            top
          </div>
          <div
            className={clsx(
              "bottom absolute grid place-items-center border-2 border-black bg-indigo-200/50 text-3xl text-white",
              "h-[200px] w-[200px]"
            )}
          >
            bottom
          </div>
        </div>
      </div>
      <style jsx>{`
        .scene {
          width: 200px;
          height: 200px;
          perspective: 400px;
        }

        .cube {
          position: relative;
          transform-style: preserve-3d;
          transform: translateZ(-100px);
        }

        .front {
          transform: scaleX(${scaleX}) scaleY(${scaleY}) rotateY(0deg)
            translateZ(100px);
        }

        .right {
          transform: scaleX(${scaleX}) scaleY(${scaleY}) rotateY(90deg)
            translateZ(100px);
        }

        .back {
          transform: scaleX(${scaleX}) scaleY(${scaleY}) rotateY(180deg)
            translateZ(100px);
        }

        .left {
          transform: scaleX(${scaleX}) scaleY(${scaleY}) rotateY(-90deg)
            translateZ(100px);
        }

        .top {
          transform: scaleX(${scaleX}) scaleY(${scaleY}) rotateX(90deg)
            translateZ(100px);
        }

        .bottom {
          transform: scaleX(${scaleX}) scaleY(${scaleY}) rotateX(-90deg)
            translateZ(100px);
        }
      `}</style>
    </>
  );
};

export default BoxVisual;

interface ShapeConfig {
  shape: 'circle' | 'rectangle';
  size: [number, number];
  position: [number, number];
  rotation: number;
  scale?: number;
  color: string;
  animations: Animation[],
  [key: string]: any;
}

interface Animation {
  range: [number, number];
  from: Omit<ShapeConfig, 'animations'>;
  to: Omit<ShapeConfig, 'animations'>;
}

interface ShapeProps {
  config: ShapeConfig;
  time: number;
}

const getAnimation = (animations?: Animation[], time: number = 0) => {
  if (!animations) return undefined;
  return animations.find((it) => it.range[0] <= time && it.range[1] >= time);
}

const interpolateNumber = (a: number, b: number, delta: number) => {
  return a*(1-delta) + b*delta;
}

const interpolateAnimation = (animation?: Animation, time: number = 0) => {
  if (!animation) return {};

  const delta = (time-animation.range[0])/(animation.range[1]-animation.range[0]);
  const result: any = {};

  if (animation.from.position && animation.to.position) {
    result.position = [
      interpolateNumber(animation.from.position[0], animation.to.position[0], delta),
      interpolateNumber(animation.from.position[1], animation.to.position[1], delta),
    ]
  }

  if (animation.from.rotation && animation.to.rotation) {
    result.rotation = interpolateNumber(animation.from.rotation, animation.to.rotation, delta);
  }

  if (animation.from.scale && animation.to.scale) {
    result.scale = interpolateNumber(animation.from.scale, animation.to.scale, delta);
  }

  return result;
}

const Shape = ({config, time}: ShapeProps) => {
  const state = {
      scale: 1,
    ...config,
    ...interpolateAnimation(getAnimation(config.animations, time), time)
  }

  return (
    <div style={{ backgroundColor: state.color,
                  position: 'absolute',
                  transition: 'all 5ms',
                  left: `${state.position[0] * 100}%`,
                  top: `${state.position[1] * 100}%`,
                  transform: `translate(-50%,-50%) rotate(${state.rotation||0}deg)`,
                  width: `min(${state.size[0]*state.scale}vw, ${state.size[0]*state.scale}vh)`, 
                  height: `min(${state.size[1]*state.scale}vw, ${state.size[1]*state.scale}vh)`, 
                  borderRadius: state.shape === 'circle' ? '100%' : 0 }}>

    </div>
  )
}

export default Shape;
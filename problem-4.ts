type Rectangle = {
  shape: string;
  height: number;
  width: number;
};

type Circle = {
  shape: string;
  radius: number;
};
type ShapeType = Rectangle | Circle;

const calculateShapeArea = (shape: ShapeType): number => {
  if ("radius" in shape) {
    const area = Math.PI * shape.radius * shape.radius;
    return parseFloat(area.toPrecision(4));
  } else {
    const area = shape.height * shape.width;
    return area;
  }
};

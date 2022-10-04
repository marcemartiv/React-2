import { Card } from "react-bootstrap";

export default function DibujamePokemon({ pokemos }) {
  const { name, stats, src, types } = pokemos;
  
  return (
    <>
      <Card style={{ width: "50rem" }} className="mt-4 mx-auto flex-row p-2">
        <Card.Img height="400" variant="top" src={src} />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <ul className="text-left">
            <Card.Text>
              {stats?.map((stat, i) => (
                <li key={i}>
                  {stat.name}: {stat.base}
                </li>
              ))}
            </Card.Text>
          </ul>
          <Card.Text className="text-secondary">{types}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

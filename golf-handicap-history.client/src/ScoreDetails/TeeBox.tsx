import { Tee, Hole } from '../Interfaces/CourseInterface'

function TeeBox({ tee }: { tee: Tee }) {
    const bgcolor = tee.color;
    const color = tee.text;

    return (
        <tr key={tee.teeId} style={{ "backgroundColor": `${bgcolor}` } }>
            <td style={{ "color": `${color}` }}>{tee.tee}</td>
            {tee.holes.map((hole: Hole) =>
                <>
                    <td style={{ "color": `${color}` }}>{hole.length}</td>
                </>
            )}
            <td style={{ "color": `${color}` }}>{tee.front9length}</td>
            <td style={{ "color": `${color}` }}>{tee.backl9ength}</td>
            <td style={{ "color": `${color}` }}>{tee.totallength}</td>
        </tr>
  );
}

export default TeeBox;
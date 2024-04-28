
export default function GoodCounter() {
    var count = 0;

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => {
                count = (count + 1);
                console.log(count);
            }
            }>Increase</button>
        </div>
    );
}
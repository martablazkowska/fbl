export default function ReceiptsPage({ receipts }: { receipts: any[] }) {
  return (
    <div>
      <h1>Receipts</h1>
      <ul>
        {receipts.map((receipt: any) => (
          <li key={receipt._id}>
            <h2>{receipt.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const dev = process.env.NODE_ENV !== 'production';
    const server = dev
      ? 'http://localhost:3000'
      : 'https://mflix-pi.vercel.app';

    const res = await fetch(`${server}/api/receipts`);
    const data = await res.json();

    return {
      props: { receipts: data },
    };
  } catch (e) {
    console.error(e);
  }
}

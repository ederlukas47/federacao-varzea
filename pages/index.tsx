import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Federação Digital de Futebol de Várzea</h1>
      <p>Bem-vindo! Acesse as seções:</p>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li><Link href="/times">📋 Times</Link></li>
        <li><Link href="/jogadores">👟 Jogadores</Link></li>
        <li><Link href="/vantagens">🏆 Clube de Vantagens</Link></li>
      </ul>
    </main>
  );
}

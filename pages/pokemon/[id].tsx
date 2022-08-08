import { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/layouts";

const PokemonDetail: NextPage = () => {
  const router = useRouter();

  const { id } = router.query;

  return (
    <Layout title="Algun pokemon">
      <h1>hola mundo {id}</h1>
    </Layout>
  );
};

export default PokemonDetail;

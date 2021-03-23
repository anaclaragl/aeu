import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FcHome } from "react-icons/fc";
import { apiLogin } from "../../api/data";
import { ILogin } from "../../interfaces/Login.interface";
import { Link } from "../../styles";
import { Container } from "./styles";

const Header = () => {
  const router = useRouter();
  const [login, setLogin] = useState<ILogin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiLogin.index();
      setLogin(response.data);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div className="container">
        <FcHome onClick={() => router.push("/")} />
        {login &&
          login.map((item) => (
            <Link key={item.id} href={`/${item.id}`}>
              {item.nome}
            </Link>
          ))}
      </div>
    </Container>
  );
};

export default Header;

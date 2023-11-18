import { useSearchParams } from "react-router-dom";
import Container from "../../Shared/Container/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./CategoryData";

const Categories = () => {
    
    const [params] = useSearchParams()
    const category = params.get('category')

  return (
    <Container>
      <div className="pt-4 flex items-center justify-between overflow-x-auto">
        {categories.map((item) => (
          <CategoryBox 
          key={item.icon} 
          item={item} 
          icon={item.icon}
          label={item.label}
          selected={category === item.label}
           />
        ))}
      </div>
    </Container>
  );
};

export default Categories;

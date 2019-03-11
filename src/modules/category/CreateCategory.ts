import { CreateBaseResolver } from "../resolver/CreateBaseResolver";
import { Category } from "../../entity/Category";
import { CategoryInput } from "./CategoryInput";

export const CreateCategoryResolver = CreateBaseResolver(
  "Category",
  Category,
  CategoryInput,
  Category
);

import { createResource } from "solid-js";
import { A } from "@solidjs/router";

import Card from "../components/Card";

const fetchProducts = async () => {
  const res = await fetch('http://localhost:4000/products')

  return res.json()
}

export default function Home() {
  const [products] = createResource(fetchProducts)

  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
      <div class="flex flex-wrap justify-center content-center gap-10 my-4">
        <For each={products()}>
          {(product) => (
            <Card rounded={true} flat={true}>
              <img class="object-contain w-72 h-96 m-auto justify-self-center" src={product.img} alt="product image" />
              <h1 class="my-3 font-bold">{product.title}</h1>
              <A href={`/product/${product.id}`} class="btn">View Product</A>
            </Card>
          )}
        </For>
      </div>
    </Show>
  )
}
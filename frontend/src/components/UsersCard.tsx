"use client"
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Button } from "@nextui-org/react";
import Link from "next/link";

function UserCard({ post }: { post: any }) {
    return (

        <Card className=" w-[250px] max-w-[400px] max-h-[500px]" key={post.id}>
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{post.name.split(" ").slice(0, 5).join(" ")}</p>
                    <p className="text-small text-default-500">{post.id}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{post.email}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button as={Link} href={`/clientes/${post.id}`}>   Ver Clientes    </Button>
            </CardFooter>
        </Card>

    )
}

export default UserCard
import { Box, Button, Grid, GridItem, Heading, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../services/auth.service";
import { useToast } from "@chakra-ui/react";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    isLogin
      ? await authService
          .login(data)
          .then((x) => {
            console.log(x);

            localStorage.setItem("user", x);
            toast({
              title: "Login successful",
              description: x.displayName + " welcome to AntiSpark",
              status: "success",
              duration: 1000,
              position: "bottom right",
              isClosable: true,
            });
          })
          .catch((err) => {
            console.log(err);
            toast({
              title: err.response.data,
              description: "Unable to login",
              status: "error",
              duration: 1000,
              position: "bottom right",
              isClosable: true,
            });
          })
          .finally(() => setIsSubmitting(false))
      : await authService
          .register(data)
          .then((x) => {
            console.log(x);
          })
          .then((x) => {
            console.log(x);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => setIsSubmitting(false));
  };

  const toggleLoginBtn = () => {
    setIsLogin(!isLogin);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        style={{
          backgroundColor: `#ffffff00`,
          backgroundImage: `-webkit-linear-gradient(90deg, rgba(239, 239, 239, 0.4) 40%, rgb(121, 104, 245)40%)`,
        }}
      >
        <Grid
          alignItems={"center"}
          overflow="hidden"
          templateColumns="repeat(2, 1fr)"
          justifyContent={"center"}
          h="100vh"
          p={10}
        >
          <GridItem
            // bgImage={"url('http://localhost:4200/login.svg')"}
            bgRepeat="no-repeat"
            h="full"
          >
            <Heading
              as={"h2"}
              fontSize="60px"
              mx={"auto"}
              mt={"20"}
              textColor="white"
            >
              Welcome back <span style={{ color: "yellow" }}>AntiSpark</span>
            </Heading>
            <Heading
              as={"h6"}
              fontWeight="normal"
              fontSize="25"
              my={4}
              color={"yellow"}
              mx={"auto"}
            >
              A mini social media platform for artist
            </Heading>
            <Heading
              as="p"
              mt="5"
              textColor={"white"}
              fontWeight="normal"
              size={"14px"}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Blanditiis fugiat cumque officiis nesciunt corrupti velit tempora
              recusandae, nemo tenetur minima? Nesciunt omnis modi autem libero.
              Vel illum ut harum illo.
            </Heading>
          </GridItem>
          <GridItem
            mx={"52"}
            bg="white"
            my="10"
            p="10"
            shadow={"lg"}
            rounded={"3xl"}
          >
            <Heading as={"p"} fontSize={"x-large"}>
              {isLogin ? "Login" : "Register"}
            </Heading>

            {!isLogin && (
              <Box mt={"8"}>
                <label className="font-bold" htmlFor="userName">
                  Username
                </label>
                <Input
                  my={"2"}
                  id="userName"
                  {...register("userName", {
                    required: "Username is required",
                  })}
                  rounded={"md"}
                  size={"sm"}
                  placeholder={"User name"}
                />
                {errors.userName && (
                  <Heading
                    as={"span"}
                    size="4px"
                    fontWeight={"normal"}
                    role="alert"
                    color={"red"}
                  >
                    {errors.userName?.message}
                  </Heading>
                )}
              </Box>
            )}
            <Box mt={"3"}>
              <label className="font-bold" htmlFor="email">
                Email
              </label>
              <Input
                my={"2"}
                {...register("email", { required: "Email is required" })}
                id="email"
                rounded={"md"}
                size={"sm"}
                placeholder={"Email"}
              />
              {errors.email && (
                <Heading
                  as={"span"}
                  size="4px"
                  fontWeight={"normal"}
                  role="alert"
                  color={"red"}
                >
                  {errors.email?.message}
                </Heading>
              )}
            </Box>
            <Box mt={"3"}>
              <label className="font-bold" htmlFor="password">
                Password
              </label>
              <Input
                my={"2"}
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                size={"sm"}
                rounded="md"
                id="password"
                placeholder={"Password"}
              />
              {errors.password && (
                <Heading
                  as={"span"}
                  size="4px"
                  fontWeight={"normal"}
                  role="alert"
                  color={"red"}
                >
                  {errors.password?.message}
                </Heading>
              )}
            </Box>

            <Box>
              <Button
                bg={"blue.700"}
                isLoading={isSubmitting}
                loadingText="Submitting"
                size={"sm"}
                type="submit"
                mt={4}
                rounded="md"
                w={"full"}
                _hover={{
                  background: "red",
                }}
                color={"white"}
              >
                {isLogin ? "Login" : "Register"}
              </Button>
            </Box>

            <Box textAlign={"center"} onClick={toggleLoginBtn}>
              <Heading as={"p"} mt={"5"} fontWeight="medium" size="xs">
                {isLogin ? " Don't have a account" : "Already have account?"}{" "}
                <Heading
                  as="span"
                  color={"blue.400"}
                  cursor="pointer"
                  size="xs"
                >
                  {isLogin ? "signup" : "login"}
                </Heading>{" "}
                ?
              </Heading>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </form>
  );
};

export default LoginRegister;

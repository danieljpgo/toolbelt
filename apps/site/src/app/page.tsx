import { Button, Heading, Text, Spinner } from "ui";

export default function Web() {
  return (
    <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      {/*  */}
      <div className="[mask-image:linear-gradient(0deg,white 90%,rgba(255,255,255,0))] absolute h-full w-full bg-[url('/grid.svg')] bg-center">
        <div className="relative z-10 flex h-40 items-center justify-center">
          <Heading as="h1" size="6xl" weight="bold">
            Toolbelt
          </Heading>
        </div>
      </div>

      <div className="container relative grid gap-10 bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10">
        <HeadingSection />
        <TextSection />
        <ButtonSection />
        <SpinnerSection />
        {/* <IconButtonSection />
        <ToggleButtonSection /> */}
      </div>
    </main>
  );
}

function HeadingSection() {
  return (
    <section className="grid gap-4">
      <Heading as="h2" size="4xl" weight="semibold" tracking="tight" color="dark">
        Heading
      </Heading>
      <hr />
      <div className="flex gap-10">
        <div>
          <Text as="small" size="xs">
            size: 6xl
          </Text>
          <Heading size="6xl">Lorem</Heading>
          <Text as="small" size="xs">
            size: 5xl
          </Text>
          <Heading size="5xl">Lorem</Heading>
          <Text as="small" size="xs">
            size: 4xl
          </Text>
          <Heading size="4xl">Lorem</Heading>
          <Text as="small" size="xs">
            size: 3xl
          </Text>
          <Heading size="3xl">Lorem</Heading>
          <Text as="small" size="xs">
            size: 2xl
          </Text>
          <Heading size="2xl">Lorem</Heading>
          <Text as="small" size="xs">
            size: xl
          </Text>
          <Heading size="xl">Lorem</Heading>
          <Text as="small" size="xs">
            size: lg
          </Text>
          <Heading size="lg">Lorem</Heading>
          <Text as="small" size="xs">
            size: base
          </Text>
          <Heading size="base">Lorem</Heading>
        </div>
        <div>
          <Text as="small" size="xs">
            weight: normal
          </Text>
          <Heading weight="normal" size="xl">
            Lorem
          </Heading>
          <Text as="small" size="xs">
            weight: medium
          </Text>
          <Heading weight="medium" size="xl">
            Lorem
          </Heading>
          <Text as="small" size="xs">
            weight: semibold
          </Text>
          <Heading weight="semibold" size="xl">
            Lorem
          </Heading>
          <Text as="small" size="xs">
            weight: bold
          </Text>
          <Heading weight="bold" size="xl">
            Lorem
          </Heading>
          <Text as="small" size="xs">
            weight: extrabold
          </Text>
          <Heading weight="extrabold" size="xl">
            Lorem
          </Heading>
          <Text as="small" size="xs">
            weight: black
          </Text>
          <Heading weight="black" size="xl">
            Lorem
          </Heading>
        </div>
        <div>
          <Text as="small" size="xs">
            tracking: tighter
          </Text>
          <Heading tracking="tighter" size="xl">
            Lorem
          </Heading>
          <Text as="small" size="xs">
            tracking: tight
          </Text>
          <Heading tracking="tight" size="xl">
            Lorem
          </Heading>
          <Text as="small" size="xs">
            tracking: normal
          </Text>
          <Heading tracking="normal" size="xl">
            Lorem
          </Heading>
          <Text as="small" size="xs">
            tracking: wide
          </Text>
          <Heading tracking="wide" size="xl">
            Lorem
          </Heading>
          <Text as="small" size="xs">
            tracking: wider
          </Text>
          <Heading tracking="wider" size="xl">
            Lorem
          </Heading>
          <Text as="small" size="xs">
            tracking: widest
          </Text>
          <Heading tracking="widest" size="xl">
            Lorem
          </Heading>
        </div>
        <div>
          <Text as="small" size="xs">
            color: base
          </Text>
          <Heading color="base" size="xl">
            Lorem
          </Heading>
          <Text as="small" size="xs">
            color: dark
          </Text>
          <Heading color="dark" size="xl">
            Lorem
          </Heading>
          <Text as="small" size="xs">
            color: darker
          </Text>
          <Heading color="darker" size="xl">
            Lorem
          </Heading>
        </div>
      </div>
    </section>
  );
}

function TextSection() {
  return (
    <section className="grid gap-4">
      <Heading as="h2" size="4xl" weight="semibold" tracking="tight" color="dark">
        Text
      </Heading>
      <hr />
      <div className="flex gap-10">
        <div>
          <Text as="small" size="xs">
            size: 2xl
          </Text>
          <Text size="2xl">Lorem</Text>
          <Text as="small" size="xs">
            size: xl
          </Text>
          <Text size="xl">Lorem</Text>
          <Text as="small" size="xs">
            size: lg
          </Text>
          <Text size="lg">Lorem</Text>
          <Text as="small" size="xs">
            size: base
          </Text>
          <Text size="base">Lorem</Text>
          <Text as="small" size="xs">
            size: sm
          </Text>
          <Text size="sm">Lorem</Text>
          <Text as="small" size="xs">
            size: xs
          </Text>
          <Text size="xs">Lorem</Text>
          <Text as="small" size="xs">
            size: 2xs
          </Text>
          <Text size="2xs">Lorem</Text>
        </div>
        <div>
          <Text as="small" size="xs">
            weight: thin
          </Text>
          <Text weight="thin">Lorem</Text>
          <Text as="small" size="xs">
            weight: extra-light
          </Text>
          <Text weight="extra-light">Lorem</Text>
          <Text as="small" size="xs">
            weight: light
          </Text>
          <Text weight="light">Lorem</Text>
          <Text as="small" size="xs">
            weight: normal
          </Text>
          <Text weight="normal">Lorem</Text>
          <Text as="small" size="xs">
            weight: normal
          </Text>
          <Text weight="normal">Lorem</Text>
          <Text as="small" size="xs">
            weight: medium
          </Text>
          <Text weight="medium">Lorem</Text>
          <Text as="small" size="xs">
            weight: semibold
          </Text>
          <Text weight="semibold">Lorem</Text>
          <Text as="small" size="xs">
            weight: bold
          </Text>
          <Text weight="bold">Lorem</Text>
          <Text as="small" size="xs">
            weight: extrabold
          </Text>
          <Text weight="extrabold">Lorem</Text>
          <Text as="small" size="xs">
            weight: black
          </Text>
          <Text weight="black">Lorem</Text>
        </div>
        <div>
          <Text as="small" size="xs">
            tracking: tighter
          </Text>
          <Text tracking="tighter" size="xl">
            Lorem
          </Text>
          <Text as="small" size="xs">
            tracking: tight
          </Text>
          <Text tracking="tight" size="xl">
            Lorem
          </Text>
          <Text as="small" size="xs">
            tracking: normal
          </Text>
          <Text tracking="normal" size="xl">
            Lorem
          </Text>
          <Text as="small" size="xs">
            tracking: wide
          </Text>
          <Text tracking="wide" size="xl">
            Lorem
          </Text>
          <Text as="small" size="xs">
            tracking: wider
          </Text>
          <Text tracking="wider" size="xl">
            Lorem
          </Text>
          <Text as="small" size="xs">
            tracking: widest
          </Text>
          <Text tracking="widest" size="xl">
            Lorem
          </Text>
        </div>
        <div>
          <Text as="small" size="xs">
            color: lighter
          </Text>
          <Text color="lighter">Lorem</Text>
          <Text as="small" size="xs">
            color: light
          </Text>
          <Text color="light">Lorem</Text>
          <Text as="small" size="xs">
            color: base
          </Text>
          <Text color="base">Lorem</Text>
          <Text as="small" size="xs">
            color: dark
          </Text>
          <Text color="dark">Lorem</Text>
          <Text as="small" size="xs">
            color: darker
          </Text>
          <Text color="darker">Lorem</Text>
        </div>
        <div>
          <Text as="small" size="xs">
            decoration: line-through
          </Text>
          <Text decoration="line-through">Lorem</Text>
          <Text as="small" size="xs">
            decoration: underline
          </Text>
          <Text decoration="underline">Lorem</Text>
        </div>
        <div>
          <Text as="small" size="xs">
            style: italic
          </Text>
          <Text style="italic">Lorem</Text>
        </div>
      </div>
    </section>
  );
}

function ButtonSection() {
  return (
    <section className="grid gap-4">
      <Heading as="h2" size="4xl" weight="semibold" tracking="tight" color="dark">
        Button
      </Heading>
      <hr />
      <div className="flex gap-10 ">
        <div className="flex flex-col gap-1">
          <Text as="small" size="xs">
            size: lg
          </Text>
          <Button size="lg">Lorem</Button>
          <Text as="small" size="xs">
            size: md
          </Text>
          <Button size="md">Lorem</Button>
          <Text as="small" size="xs">
            size: sm
          </Text>
          <Button size="sm">Lorem</Button>
        </div>
        <div className="flex flex-col gap-1">
          <Text as="small" size="xs">
            variant: primary
          </Text>
          <Button variant="primary">Lorem</Button>
          <Text as="small" size="xs">
            variant: second
          </Text>
          <Button variant="secondary">Lorem</Button>

          <Text as="small" size="xs">
            variant: ghost
          </Text>
          <Button variant="ghost">Lorem</Button>
          <Text as="small" size="xs">
            variant: destructive
          </Text>
          <Button variant="destructive">Lorem</Button>
        </div>
        <div className="flex flex-col gap-1">
          <Text as="small" size="xs">
            variant: disabled - primary
          </Text>
          <Button variant="primary" disabled>
            Lorem
          </Button>
          <Text as="small" size="xs">
            variant: disabled - second
          </Text>
          <Button variant="secondary" disabled>
            Lorem
          </Button>
          <Text as="small" size="xs">
            variant: disabled - ghost
          </Text>
          <Button variant="ghost" disabled>
            Lorem
          </Button>
          <Text as="small" size="xs">
            variant: disabled - destructive
          </Text>
          <Button variant="destructive" disabled>
            Lorem
          </Button>
        </div>
        <div className="flex flex-col gap-1">
          <Text as="small" size="xs">
            variant: loading - primary
          </Text>
          <Button variant="primary" loading>
            Lorem
          </Button>
          <Text as="small" size="xs">
            variant: loading - second
          </Text>
          <Button variant="secondary" loading>
            Lorem
          </Button>
          <Text as="small" size="xs">
            variant: loading - ghost
          </Text>
          <Button variant="ghost" loading>
            Lorem
          </Button>
          <Text as="small" size="xs">
            variant: loading - destructive
          </Text>
          <Button variant="destructive" loading>
            Lorem
          </Button>
        </div>
      </div>
    </section>
  );
}

function SpinnerSection() {
  return (
    <section className="grid gap-4">
      <Heading as="h2" size="4xl" weight="semibold" tracking="tight" color="dark">
        Spinner
      </Heading>
      <hr />
      <div className="flex gap-10">
        <div className="flex flex-col gap-1">
          <Text as="small" size="xs">
            size: xl
          </Text>
          <Spinner size="xl" />
          <Text as="small" size="xs">
            size: lg
          </Text>
          <Spinner size="lg" />
          <Text as="small" size="xs">
            size: md
          </Text>
          <Spinner size="md" />
          <Text as="small" size="xs">
            size: sm
          </Text>
          <Spinner size="sm" />
        </div>
      </div>
    </section>
  );
}

// function IconButtonSection() {
//   return (
//     <section className="grid gap-4">
//       <Heading as="h2" size="4xl" weight="semibold" tracking="tight" color="dark">
//         IconButton
//       </Heading>
//       <hr />
//       <div className="flex gap-10">@TODO</div>
//     </section>
//   );
// }

// function ToggleButtonSection() {
//   return (
//     <section className="grid gap-4">
//       <Heading as="h2" size="4xl" weight="semibold" tracking="tight" color="dark">
//         ToggleButton
//       </Heading>
//       <hr />
//       <div className="flex gap-10">@TODO</div>
//     </section>
//   );
// }

/* <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 rounded-lg sm:rounded-xl sm:px-10"> */
/* </div> */

{
  /* <Image
        priority
        src="/beams.jpeg"
        alt="background light beams"
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        width="1308"
        height="900"
      /> */
}
{
  /* <div>
          <div className="divide-y divide-gray-300/50">
            <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
              <p>
                An advanced online playground for Tailwind CSS, including
                support for things like:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">
                    Customizing your
                    <code className="text-sm font-bold text-gray-900">
                      tailwind.config.js
                    </code>{" "}
                    file
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">
                    Extracting classNamees with
                    <code className="text-sm font-bold text-gray-900">
                      @apply
                    </code>
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-6 w-6 flex-none fill-sky-100 stroke-sky-500 stroke-2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="11" />
                    <path
                      d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                      fill="none"
                    />
                  </svg>
                  <p className="ml-4">Code completion with instant preview</p>
                </li>
              </ul>
              <p>
                Perfect for learning how the framework works, prototyping a new
                idea, or creating a demo to share online.
              </p>
            </div>
            <div className="pt-8 text-base font-semibold leading-7">
              <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
              <p>
                <a
                  href="https://tailwindcss.com/docs"
                  className="text-sky-500 hover:text-sky-600"
                >
                  Read the docs &rarr;
                </a>
              </p>
            </div>
          </div>
        </div> */
}


import { useState } from "react";

const API = "https://api.dicebear.com/10.x/avataaars/svg";

const initialOptions = {
    eyesVariant: "happy",
    eyebrowsVariant: "default",
    mouthVariant: "smile",
    topVariant: "shortFlat",
    accessoriesVariant: "round",
    clothesVariant: "hoodie",
    skinColor: "edb98a",
    hairColor: "2c1b18",
    clothesColor: "3c4f5c",
    accessoriesColor: "262e33",
    backgroundColor: "b6e3f4",
    accessoriesProbability: 100,
    facialHairColor: "724133",
    facialHairProbability: 0,
};

const controls = [
    {
        label: "Eyes",
        key: "eyesVariant",
        options: [
            "default", "happy", "wink", "surprised", "closed",
            "cry", "hearts", "side", "squint", "eyeRoll",
            "xDizzy", "winkWacky",
        ],
    },
    {
        label: "Eyebrows",
        key: "eyebrowsVariant",
        options: [
            "default", "defaultNatural", "angry", "angryNatural",
            "raisedExcited", "raisedExcitedNatural", "sadConcerned",
            "flatNatural", "frownNatural", "upDown",
        ],
    },
    {
        label: "Mouth",
        key: "mouthVariant",
        options: [
            "smile", "default", "serious", "sad", "screamOpen",
            "tongue", "twinkle", "grimace", "concerned", "disbelief",
        ],
    },
    {
        label: "Hairstyle",
        key: "topVariant",
        options: [
            "shortFlat", "shortRound", "shortCurly", "shortWaved",
            "longButNotTooLong", "straight01", "straight02", "bob",
            "curly", "dreads", "dreads01", "dreads02", "frizzle",
            "shaggy", "theCaesar", "bun", "bigHair", "hat",
            "hijab", "turban", "winterHat1",
        ],
    },
    {
        label: "Accessories",
        key: "accessoriesVariant",
        options: [
            "round", "prescription01", "prescription02",
            "sunglasses", "wayfarers", "kurt", "eyepatch",
        ],
    },
    {
        label: "Clothing",
        key: "clothesVariant",
        options: [
            "hoodie", "blazerAndShirt", "blazerAndSweater",
            "graphicShirt", "overall", "shirtCrewNeck",
            "shirtScoopNeck", "shirtVNeck", "collarAndSweater",
        ],
    },
];

const colorControls = [
    {
        label: "Skin Tone", key: "skinColor", colors: [
            "ffdbb4", "edb98a", "d08b5b", "ae5d29", "614335",
        ]
    },
    {
        label: "Hair Color", key: "hairColor", colors: [
            "090806", "2c1b18", "724133", "b58143", "d6b370",
            "a55728", "c93305", "e8e1e1",
        ]
    },
    {
        label: "Clothing Color", key: "clothesColor", colors: [
            "3c4f5c", "25557c", "e6e6e6", "5199e4",
            "65c9ff", "ff488e", "ffafb9", "a7ffc4",
        ]
    },
    {
        label: "Accessory Color", key: "accessoriesColor", colors: [
            "262e33", "65c9ff", "5199e4", "e6e6e6",
            "ff488e", "a7ffc4",
        ]
    },
    {
        label: "Beard Color", key: "facialHairColor", colors: [
            "724133", "2c1b18", "090806", "b58143", "a55728",
        ]
    },
    {
        label: "Background", key: "backgroundColor", colors: [
            "b6e3f4", "c0aede", "d1d4f9", "ffd5dc",
            "a7ffc4", "ffdfbf", "ffffff", "27272a",
        ]
    },
];

function buildAvatarUrl(seed, options) {
    const params = new URLSearchParams({
        seed: seed || "Avatar",
        ...options,
    });

    return `${API}?${params.toString()}`;
}

export default function Avatar() {
    const [name, setName] = useState("John");
    const [seed, setSeed] = useState("John");
    const [options, setOptions] = useState(initialOptions);
    const [error, setError] = useState(false);

    const avatarUrl = buildAvatarUrl(seed, options);

    const updateOption = (key, value) => {
        setOptions((previous) => ({
            ...previous,
            [key]: value,
        }));
    };

    const generateAvatar = () => {
        if (!name.trim()) return;
        setSeed(name.trim());
        setError(false);
    };


    const randomizeAvatar = () => {
        const randomSeed = crypto.randomUUID();

        setName(randomSeed.slice(0, 8));
        setSeed(randomSeed);

        setOptions((previous) => ({
            ...previous,

            eyesVariant:
                controls.find((c) => c.key === "eyesVariant")
                    .options[Math.floor(Math.random() * controls.find((c) => c.key === "eyesVariant").options.length)],

            eyebrowsVariant:
                controls.find((c) => c.key === "eyebrowsVariant")
                    .options[Math.floor(Math.random() * controls.find((c) => c.key === "eyebrowsVariant").options.length)],

            mouthVariant:
                controls.find((c) => c.key === "mouthVariant")
                    .options[Math.floor(Math.random() * controls.find((c) => c.key === "mouthVariant").options.length)],

            topVariant:
                controls.find((c) => c.key === "topVariant")
                    .options[Math.floor(Math.random() * controls.find((c) => c.key === "topVariant").options.length)],

            accessoriesVariant:
                controls.find((c) => c.key === "accessoriesVariant")
                    .options[Math.floor(Math.random() * controls.find((c) => c.key === "accessoriesVariant").options.length)],

            clothesVariant:
                controls.find((c) => c.key === "clothesVariant")
                    .options[Math.floor(Math.random() * controls.find((c) => c.key === "clothesVariant").options.length)],

            skinColor: colorControls.find((c) => c.key === "skinColor").colors[
                Math.floor(Math.random() * colorControls.find((c) => c.key === "skinColor").colors.length)
            ],

            hairColor: colorControls.find((c) => c.key === "hairColor").colors[
                Math.floor(Math.random() * colorControls.find((c) => c.key === "hairColor").colors.length)
            ],

            clothesColor: colorControls.find((c) => c.key === "clothesColor").colors[
                Math.floor(Math.random() * colorControls.find((c) => c.key === "clothesColor").colors.length)
            ],

            backgroundColor: colorControls.find((c) => c.key === "backgroundColor").colors[
                Math.floor(Math.random() * colorControls.find((c) => c.key === "backgroundColor").colors.length)
            ],

            accessoriesProbability: 100,
            facialHairProbability: Math.random() < 0.5 ? 0 : 100,
        }));

        setError(false);
    };

    const downloadAvatar = async () => {
        try {
            const response = await fetch(avatarUrl);

            if (!response.ok) {
                throw new Error("Could not download avatar");
            }

            const blob = await response.blob();
            const objectUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");

            link.href = objectUrl;
            link.download = `${name || "avatar"}.svg`;
            link.click();

            URL.revokeObjectURL(objectUrl);
        } catch {
            window.open(avatarUrl, "_blank", "noopener,noreferrer");
        }
    };

    const resetOptions = () => {
        setOptions(initialOptions);
    };

    return (
        <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-8">
            <div className="mx-auto max-w-6xl">
                <header className="mb-10 text-center">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
                        Your creativity, your character
                    </p>
                    <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
                        Avatar <span className="text-indigo-400">Studio</span>
                    </h1>
                    <p className="mt-4 text-slate-400">
                        Customize your character, one detail at a time.
                    </p>
                </header>

                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                    {/* Preview */}
                    <section className="h-fit rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:p-8 lg:sticky lg:top-6">
                        <div className="mb-5 flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold">Your character</h2>
                                <p className="mt-1 text-sm text-slate-400">
                                    Live preview
                                </p>
                            </div>
                            <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
                                SVG
                            </span>
                        </div>

                        <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-6">
                            {error ? (
                                <p className="text-sm text-red-400">
                                    Avatar could not load. Try again.
                                </p>
                            ) : (
                                <img
                                    key={avatarUrl}
                                    src={avatarUrl}
                                    alt={`${name}'s avatar`}
                                    onError={() => setError(true)}
                                    onLoad={() => setError(false)}
                                    className="aspect-square w-full max-w-64 rounded-2xl object-contain"
                                />
                            )}
                        </div>

                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-medium text-slate-300">
                                Character name
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") generateAvatar();
                                }}
                                placeholder="Enter a name"
                                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                            />
                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                            <button
                                onClick={generateAvatar}
                                disabled={!name.trim()}
                                className="rounded-xl bg-indigo-600 px-4 py-3 font-semibold transition hover:bg-indigo-500 disabled:opacity-40"
                            >
                                Generate
                            </button>
                            <button
                                onClick={randomizeAvatar}
                                className="rounded-xl border border-slate-700 px-4 py-3 font-semibold transition hover:bg-slate-800"
                            >
                                Randomize
                            </button>
                            <button
                                onClick={downloadAvatar}
                                className="col-span-2 rounded-xl bg-white px-4 py-3 font-semibold text-slate-950 transition hover:bg-slate-200"
                            >
                                Download SVG
                            </button>
                        </div>

                        <button
                            onClick={resetOptions}
                            className="mt-4 w-full text-sm text-slate-400 transition hover:text-white"
                        >
                            Reset customization
                        </button>
                    </section>

                    {/* Customization controls */}
                    <section className="space-y-6">
                        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
                            <h2 className="mb-1 text-xl font-bold">Facial features</h2>
                            <p className="mb-6 text-sm text-slate-400">
                                Choose the expression and hairstyle.
                            </p>

                            <div className="grid gap-5 sm:grid-cols-2">
                                {controls.map((control) => (
                                    <div key={control.key}>
                                        <label className="mb-2 block text-sm font-medium text-slate-300">
                                            {control.label}
                                        </label>
                                        <select
                                            value={options[control.key]}
                                            onChange={(e) =>
                                                updateOption(control.key, e.target.value)
                                            }
                                            className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-3 text-sm outline-none focus:border-indigo-500"
                                        >
                                            {control.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option.replace(/([A-Z])/g, " $1")}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 border-t border-slate-800 pt-5">
                                <label className="mb-3 block text-sm font-medium text-slate-300">
                                    Facial hair visibility
                                </label>
                                <div className="flex gap-3">
                                    {[
                                        { label: "No beard", value: 0 },
                                        { label: "Show beard", value: 100 },
                                    ].map((item) => (
                                        <button
                                            key={item.value}
                                            onClick={() =>
                                                updateOption("facialHairProbability", item.value)
                                            }
                                            className={`rounded-xl border px-4 py-2 text-sm transition ${Number(options.facialHairProbability) === item.value
                                                ? "border-indigo-500 bg-indigo-500/15 text-indigo-300"
                                                : "border-slate-700 text-slate-300 hover:bg-slate-800"
                                                }`}
                                        >
                                            {item.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:p-7">
                            <h2 className="mb-1 text-xl font-bold">Color palette</h2>
                            <p className="mb-6 text-sm text-slate-400">
                                Personalize the look with different colors.
                            </p>

                            <div className="space-y-6">
                                {colorControls.map((control) => (
                                    <div key={control.key}>
                                        <div className="mb-3 flex items-center justify-between">
                                            <label className="text-sm font-medium text-slate-300">
                                                {control.label}
                                            </label>
                                            <span className="font-mono text-xs text-slate-500">
                                                #{options[control.key]}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            {control.colors.map((color) => (
                                                <button
                                                    key={color}
                                                    title={`#${color}`}
                                                    aria-label={`${control.label}: ${color}`}
                                                    onClick={() =>
                                                        updateOption(control.key, color)
                                                    }
                                                    className={`h-9 w-9 rounded-full border-2 transition hover:scale-110 ${options[control.key] === color
                                                        ? "scale-110 border-white ring-2 ring-indigo-500"
                                                        : "border-slate-700"
                                                        }`}
                                                    style={{ backgroundColor: `#${color}` }}
                                                />
                                            ))}

                                            <label
                                                title="Choose a custom color"
                                                className="flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full border border-slate-600 bg-slate-800 text-lg"
                                            >
                                                +
                                                <input
                                                    type="color"
                                                    value={`#${options[control.key]}`}
                                                    onChange={(e) =>
                                                        updateOption(
                                                            control.key,
                                                            e.target.value.slice(1)
                                                        )
                                                    }
                                                    className="sr-only"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="px-2 text-center text-xs leading-5 text-slate-500">
                            Powered by DiceBear. Available facial features and variants
                            depend on the selected avatar style.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}

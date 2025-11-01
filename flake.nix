{
  description = "Nix flake for timothynn.github.io (Next.js site)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in {
        # A simple derivation that runs pnpm build and copies the build output
        packages.default = pkgs.stdenv.mkDerivation {
          pname = "timothynn-site";
          version = "0.1.0";
          src = ./.;

          nativeBuildInputs = [ pkgs.pnpm pkgs.nodejs-20_x ];
          buildInputs = [ pkgs.nodejs-20_x ];

          # Build with pnpm (use frozen lockfile if present)
          buildPhase = ''
            export NODE_ENV=production
            if [ -f pnpm-lock.yaml ]; then
              ${pkgs.pnpm}/bin/pnpm install --frozen-lockfile || ${pkgs.pnpm}/bin/pnpm install
            else
              ${pkgs.pnpm}/bin/pnpm install
            fi
            ${pkgs.pnpm}/bin/pnpm run build
          '';

          # Install outputs: copy necessary runtime/build artifacts
          installPhase = ''
            mkdir -p $out
            # Copy produced build and public assets. Adjust if your app has other runtime requirements.
            cp -r .next public package.json pnpm-lock.yaml $out/ 2>/dev/null || true
            # Copy node_modules so the result can be inspected/run (optional for static hosting)
            if [ -d node_modules ]; then
              cp -r node_modules $out/
            fi
          '';

          meta = with pkgs.lib; {
            description = "Built Next.js site for timothynn.github.io";
            license = licenses.mit;
            platforms = platforms.all;
          };
        };

        # Developer shell: node, pnpm and common tools
        devShell = pkgs.mkShell {
          buildInputs = with pkgs; [ nodejs-20_x pnpm git ripgrep ];
          shellHook = ''
            echo "Dev shell active — run 'pnpm install' then 'pnpm dev' or 'pnpm build'"
          '';
        };
      }
    );
}

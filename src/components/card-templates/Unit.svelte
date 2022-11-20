<script lang="ts">
    export let faction: string;
    export let name: string;
    export let unitType: string;
    export let movement: number;
    export let cost: number;
    export let strengths: Array<number>;
    export let abilities: Array<string>;
    export let cardart: string;

    let levels: Array<number> = [0, 1, 2, 3, 4];
</script>

<div class="cards">
{#each levels as i}
    <svg width="40%" height="40%" viewBox="0 0 433 700" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
        <g transform="matrix(1,0,0,1,-1377,-4767)">
            <g id="Artboard2" transform="matrix(0.573686,0,0,0.546964,1377.94,4155.75)">
                <rect x="0" y="1118.01" width="752.095" height="1279.18" style="fill:rgb(6,22,30);"/>
                <g transform="matrix(1.69065,0,0,1.77325,-2120.37,919.233)">
                    <g transform="matrix(1.07065,0,0,1.10742,298.963,-35.8469)">
                        <path d="M1262.04,222.411C1262.04,207.36 1249.4,195.141 1233.84,195.141L967.484,195.141C951.917,195.141 939.278,207.36 939.278,222.411L939.278,700.324C939.278,715.374 951.917,727.593 967.484,727.593L1233.84,727.593C1249.4,727.593 1262.04,715.374 1262.04,700.324L1262.04,222.411Z" style="fill:rgb(78,86,89);"/>
                        <clipPath id="_clip1">
                            <path d="M1262.04,222.411C1262.04,207.36 1249.4,195.141 1233.84,195.141L967.484,195.141C951.917,195.141 939.278,207.36 939.278,222.411L939.278,700.324C939.278,715.374 951.917,727.593 967.484,727.593L1233.84,727.593C1249.4,727.593 1262.04,715.374 1262.04,700.324L1262.04,222.411Z"/>
                        </clipPath>
                        <g clip-path="url(#_clip1)">
                            <g transform="matrix(0.913369,0,0,0.948872,95.3084,23.5515)">
                                <path d="M1262.04,212.543C1262.04,202.939 1253.66,195.141 1243.34,195.141L957.978,195.141C947.657,195.141 939.278,202.939 939.278,212.543L939.278,710.191C939.278,719.796 947.657,727.593 957.978,727.593L1243.34,727.593C1253.66,727.593 1262.04,719.796 1262.04,710.191L1262.04,212.543ZM1259.31,212.543L1259.31,710.191C1259.31,718.39 1252.15,725.047 1243.34,725.047L957.978,725.047C949.168,725.047 942.015,718.39 942.015,710.191L942.015,212.543C942.015,204.344 949.168,197.688 957.978,197.688C957.978,197.688 1243.34,197.688 1243.34,197.688C1252.15,197.688 1259.31,204.344 1259.31,212.543Z" style="fill:rgb(177,180,181);"/>
                            </g>
                            <g transform="matrix(1.01218,0,0,0.978572,-3.47096,20.0452)">
                                <path d="M1119.87,149.834L1062.34,150.098L1038.35,178.068L1091.27,237.226L1143.89,177.524L1119.87,149.834Z" style="fill:rgb(78,86,89);"/>
                            </g>
                            <g transform="matrix(0.975664,0,0,0.931024,888.18,-912.96)">
                                <rect x="170.887" y="1737.38" width="92.509" height="11.621" style="fill:rgb(78,86,89);"/>
                            </g>
                        </g>
                    </g>
                    <g transform="matrix(1,0,0,1,336.909,94.9268)">
                        <g transform="matrix(1,0,0,1,49.3506,-92.935)">
                            <path d="M1066.26,158.568L1049.63,177.951L1091.22,224.443L1132.62,177.48L1116.01,158.34L1066.26,158.568Z" style="fill:rgb(0,133,177);"/>
                        </g>
                        <g transform="matrix(1,0,0,1,48.6087,-92.3809)">
                            <path d="M1066.98,158.04L1058.47,177.296L1050.37,177.395L1066.98,158.04" style="fill:rgb(0,192,215);"/>
                        </g>
                        <g transform="matrix(1,0,0,1,49.3186,-93.1568)">
                            <path d="M1049.66,178.176L1057.75,178.072L1091.16,224.665L1049.66,178.176" style="fill:rgb(26,230,254);"/>
                        </g>
                        <g transform="matrix(-1,0,0,1,2232.34,-92.3809)">
                            <path d="M1066.98,157.786L1058.47,176.945L1050.37,176.952L1066.98,157.786" style="fill:rgb(167,246,255);"/>
                        </g>
                        <g transform="matrix(-1,0,0,1,2231.63,-93.1568)">
                            <path d="M1049.66,177.721L1057.75,177.728L1091.16,224.665L1049.66,177.721" style="fill:rgb(0,192,215);"/>
                        </g>
                        <g id="cost" transform="matrix(3.24125,0,0,3.24125,-2555.67,-175.981)">
                            <text x="1136.62px" y="86.142px" style="font-family:'NunitoSans-Bold', 'Nunito Sans';font-weight:700;font-size:12px;fill:white;">{cost}</text>
                        </g>
                    </g>
                    <g transform="matrix(1.3078,0,0,1.3078,-1156.31,-2334.75)">
                        <circle cx="1979.89" cy="1935.61" r="4.18" style="fill:rgb(177,180,181);"/>
                    </g>
                    <g transform="matrix(1.3078,0,0,1.3078,-1166.37,-1778.02)">
                        <circle cx="1979.89" cy="1935.61" r="4.18" style="fill:rgb(177,180,181);"/>
                    </g>
                    <g transform="matrix(1.3078,0,0,1.3078,-1066.65,-2334.75)">
                        <circle cx="1979.89" cy="1935.61" r="4.18" style="fill:rgb(177,180,181);"/>
                    </g>
                    <g transform="matrix(1.3078,0,0,1.3078,-1058.8,-1778.02)">
                        <circle cx="1979.89" cy="1935.61" r="4.18" style="fill:rgb(177,180,181);"/>
                    </g>
                    <g id="unitstrength.png" transform="matrix(0.668004,0,0,0.668004,1322.67,684.735)">
                        <use xlink:href="#_Image2" x="0" y="0" width="128px" height="150px"/>
                    </g>
                    <g id="bigmovebg.png" transform="matrix(0.674251,0,0,0.674251,1550.87,687.987)">
                        <use xlink:href="#_Image3" x="0" y="0" width="125px" height="140px"/>
                    </g>
                    <g id="strength" transform="matrix(3.24125,0,0,3.24125,-2330.11,477.122)">
                        <text x="1136.62px" y="86.142px" style="font-family:'NunitoSans-Bold', 'Nunito Sans';font-weight:700;font-size:12px;fill:white;">{strengths[i]}</text>
                    </g>
                    <g id="movement" transform="matrix(3.24125,0,0,3.24125,-2104.39,477.122)">
                        <text x="1136.62px" y="86.142px" style="font-family:'NunitoSans-Bold', 'Nunito Sans';font-weight:700;font-size:12px;fill:white;">{movement}</text>
                    </g>
                    <g transform="matrix(1.38156,0,0,1.38156,-695.232,-6498.14)">
                        <text id="name" text-anchor="middle" dominant-baseline="middle" x="50%" y="4898.82px" style="font-family:'Pretendard-SemiBold', 'Pretendard';font-weight:600;font-size:16.418px;fill:white;">{name}</text>
                    </g>
                    <g transform="matrix(0.921748,0,0,0.921748,25.1194,-4216.3)">
                        <text id="unitType" x="1539.87px" y="4898.82px" style="font-family:'Pretendard-SemiBold', 'Pretendard';font-weight:600;font-size:15.66px;fill:white;fill-opacity:0.65;">{unitType}</text>
                    </g>
                    <g transform="matrix(0.921748,0,0,0.921748,26.3822,-3927.61)">
                        <text id="ability" x="1534.47px" y="4898.82px" style="font-family:'Pretendard-SemiBold', 'Pretendard';font-weight:600;font-size:15.66px;fill:white;">{abilities[i]}</text>
                    </g>
                    <g transform="matrix(1.16646,0,0,1.16646,-366.304,-4957.26)">
                        <text id="level" x="1563.22px" y="4898.82px" style="font-family:'Pretendard-SemiBold', 'Pretendard';font-weight:600;font-size:14.142px;fill:white;">레벨 {i + 1}</text>
                    </g>
                </g>
            </g>
        </g>
        <defs>
            <image id="_Image2" width="128px" height="150px" xlink:href="data:image/png;base64,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"/>
            <image id="_Image3" width="125px" height="140px" xlink:href="data:image/png;base64,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"/>
        </defs>
    </svg>
{/each}
</div>

<style>
    .cards {
        width: 1200px;
        margin: 0 auto;
        display: inline-flex;
    }

    .cards > svg {
        width: 15em;
    }

    @media (width <= 600px) {
        .cards {
            flex-direction: column;
            align-items: center;
        }

        .cards > svg {
            width: 20em;
        }
    }
</style>
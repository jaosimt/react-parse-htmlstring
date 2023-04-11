import React, { useState } from 'react';
import ParseHTML, { parseHTMLString } from 'react-parse-htmlstring';

import './styles.scss';

const jaoSolutionSVGString = '<svg width="100" height="100" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient xlink:href="#a" id="b" gradientUnits="userSpaceOnUse" x1="174.522" y1="158.392" x2="174.882" y2="101.049" gradientTransform="translate(0 5.332)"/><linearGradient id="a"><stop style="stop-color:#e5ae00;stop-opacity:1" offset="0"/><stop style="stop-color:#ffbf00;stop-opacity:1" offset=".5"/><stop style="stop-color:#ffd447;stop-opacity:1" offset=".75"/><stop style="stop-color:#ffdd3e;stop-opacity:1" offset=".875"/><stop style="stop-color:#e4ad0b;stop-opacity:1" offset="1"/></linearGradient><clipPath clipPathUnits="userSpaceOnUse" id="c"><path style="fill:red;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:.264583" d="M49.512 103.08v14.298h.02c.15 0 .302.005.453.012a.182.182 0 0 1 .042-.011.289.289 0 0 1 .136-.05c.065-.004.11.028.129.077h.01l.05.004c-.016-.115.046-.19.125-.195.069-.005.152.043.208.164l.027.055c.21.018.419.043.625.083.233.041.453.12.67.21.225.096.436.22.641.352.186.12.363.25.533.391.183.158.345.339.502.523.193.22.353.467.508.716.14.224.26.458.38.693.075.15.141.305.2.462.027.068.038.141.062.21.024.06.039.123.057.184l.063.27c.02.08.035.16.046.241.014.04-.002.09.013.13.011.035.026.07.037.105.01.029.018.061.033.088.02.045.036.093.05.14.03.112.037.23.048.345.009.095.014.191.018.287l.016.05.28.155.29.161c.097.055.195.109.295.16l.066.032c.03.015.066.033.098.047l.049.021c.004.002.009.001.012.005.002.002-.006 0-.009 0-.207-.017.175.263-.026.208l-.034-.009a.455.455 0 0 1-.026-.01c-.029.029-.082.044-.155.027-.063-.015-.122-.041-.181-.066a3.03 3.03 0 0 1-.293-.157c-.029-.017-.058-.033-.086-.052-.04-.025-.079-.053-.118-.08l-.003-.001.046.116c.04.1.083.201.127.3.085.19-.11.269-.195.078a8.845 8.845 0 0 1-.127-.3l-.014-.033v.036c.005.184 0 .37-.044.55-.01.04-.025.08-.037.12-.013.035-.02.072-.039.104a.894.894 0 0 1-.314.326c-.1.06-.184.085-.291.124a1.71 1.71 0 0 1-.621.064c-.116-.01-.201-.028-.315-.05a4.05 4.05 0 0 1-.857-.334c-.061-.034-.12-.071-.18-.106-.404-.261-.749-.598-1.085-.939a13.733 13.733 0 0 1-1.067-1.303 10.412 10.412 0 0 1-.848-1.42v4.897h19.44V103.08zm.027 14.629h-.027v.183a.932.932 0 0 1 .027-.049c.023-.034.044-.07.07-.103a.998.998 0 0 1 .024-.03l-.094-.001zm.45.114a.851.851 0 0 0-.133.136c-.015.02-.027.043-.04.065a.473.473 0 0 0-.06.158c.086-.05.176-.093.267-.134l-.01-.023a.292.292 0 0 1-.025-.202zm1.477.062a.383.383 0 0 1-.144.066l-.093.026.026.032c.051-.017.102-.033.154-.048.144-.04.242.005.275.074.028-.016.056-.031.083-.048a3.26 3.26 0 0 0-.301-.102zm.655.265a2.53 2.53 0 0 1-.06.042c.065.014.13.077.161.197.077.299.156.605.101.915a1.91 1.91 0 0 1-.186.608l.018.02.06.076a.901.901 0 0 0 .058.07l.088.108.142.168.196.23c.058.068.117.135.179.2a19.789 19.789 0 0 0 .338.35l.166.168c.064.065.13.13.193.196l.14.144.112.112c.036.035.071.072.108.106l.098.09c.034.03.068.061.1.093.031.03.06.06.092.088.03.029.058.057.088.084.032.03.065.06.096.091l.1.098c.03.033.064.064.093.099l.056.067.11.082.09.068c-.001-.037-.003-.075-.006-.111-.01-.093-.016-.187-.035-.278-.01-.035-.021-.07-.036-.104a1.202 1.202 0 0 1-.048-.126c-.014-.05-.04-.096-.047-.149-.007-.046-.008-.092-.014-.138a2.14 2.14 0 0 0-.041-.212c-.02-.083-.04-.166-.057-.25-.017-.058-.031-.116-.053-.171-.023-.067-.037-.136-.061-.203a4.385 4.385 0 0 0-.182-.426 8.998 8.998 0 0 0-.369-.67 5.045 5.045 0 0 0-.478-.675 4.47 4.47 0 0 0-.462-.484 5.417 5.417 0 0 0-.849-.574zm-.22.142c-.083.05-.168.095-.253.141l-.065.037a3.198 3.198 0 0 1 .405.832l.01-.053c.044-.264-.03-.524-.096-.777a.31.31 0 0 1 0-.18zm-1.742.057c-.059.026-.118.053-.174.083.085.061.179.11.275.153a.486.486 0 0 1 .02-.014c-.008-.001-.013-.007-.018-.017h-.006c-.02.003-.018-.036-.027-.054l-.07-.151zm-.45.287-.08.09c-.023.039-.076.123-.089.168-.019.065.018.195.039.255.013.036.032.069.047.103.004.01.01.017.013.026.039-.082.088-.16.146-.237.074-.088.12-.145.2-.223a1.661 1.661 0 0 1-.275-.182zm.605.329a2.302 2.302 0 0 0-.093.084c-.07.068-.121.131-.184.206a.728.728 0 0 0-.152.336c.072.064.15.123.23.178.097.05.212.074.316.027.015-.007.026-.018.039-.028l.023-.021c-.065-.092-.092-.164-.144-.278-.007-.05-.02-.1-.022-.15a.706.706 0 0 1 .061-.329l-.074-.025zm.467.032-.015.013a.441.441 0 0 0-.101.173 2.077 2.077 0 0 0-.008.15c.003.027.012.053.018.08l.02.032a1.651 1.651 0 0 0 .12-.375c-.015-.005-.029-.023-.032-.054l-.002-.02zm.174.669-.035.062c.062.056.129.108.187.144 0-.051 0-.102.002-.153-.018 0-.047-.016-.101-.045a.79.79 0 0 0-.053-.008zm-1.443.015v.061c.037.126.076.252.12.376.094.255.208.503.34.741.2.363.413.72.657 1.055.32.442.664.865 1.035 1.264.315.321.638.638 1.017.886.052.031.103.065.157.094.244.132.507.23.774.307.081.015.181.037.264.044.168.015.335 0 .498-.046.166-.058.234-.076.36-.204.016-.016.036-.03.047-.05.016-.027.022-.057.033-.086.06-.185.077-.376.067-.57a33.841 33.841 0 0 0-.005-.416l-.011.008c-.056.03-.1.04-.163.027a.401.401 0 0 1-.074-.03c-.02-.01-.04-.018-.06-.029-.017-.009-.033-.02-.05-.028l-.06-.03a.918.918 0 0 1-.069-.044c-.018-.013-.038-.024-.057-.036a2.055 2.055 0 0 0-.066-.04c-.03-.017-.06-.036-.09-.056l-.076-.052-.065-.041-.051-.035c-.014-.01-.028-.021-.043-.03l-.042-.03a1.769 1.769 0 0 1-.076-.051 2.09 2.09 0 0 0-.065-.045c-.028-.02-.058-.038-.085-.059-.025-.017-.05-.036-.076-.052l-.078-.056c-.027-.02-.053-.042-.08-.061a3.11 3.11 0 0 1-.192-.154l-.077-.063a1.788 1.788 0 0 1-.07-.067l-.067-.069-.064-.066c-.028-.03-.053-.061-.079-.093-.029-.035-.06-.07-.088-.106a11.006 11.006 0 0 1-.086-.112l-.085-.114-.083-.11a3.117 3.117 0 0 0-.088-.12c-.03-.04-.058-.08-.086-.12a1.143 1.143 0 0 0-.071-.09c-.035-.042-.07-.085-.106-.126a2.974 2.974 0 0 0-.12-.142 1.46 1.46 0 0 0-.083-.083 1.108 1.108 0 0 1-.08-.086 2.87 2.87 0 0 1-.107-.13l-.011-.013c-.09.111-.2.208-.318.287-.258.14-.482.228-.78.153-.296-.078-.516-.18-.74-.394-.07-.074-.133-.135-.194-.219a1.188 1.188 0 0 1-.199-.486c-.004-.04-.012-.08-.014-.121l-.039-.041zm1.893.24.002.076c.023.006.047.01.07.012l-.06-.06a1.86 1.86 0 0 0-.012-.027zm-.691.067a1 1 0 0 1-.083.07c-.04.019-.077.042-.119.058a.672.672 0 0 1-.468-.015c-.018-.007-.034-.017-.05-.025a.704.704 0 0 0 .05.076c.041.055.106.12.153.169.173.162.356.245.583.302.201.055.366-.028.538-.124.02-.013.038-.029.057-.044-.027.005-.054.006-.08.01-.038-.025-.078-.048-.115-.074-.006-.004-.007-.012-.01-.017a.395.395 0 0 1-.03-.088l-.007-.034-.05-.02c-.052-.028-.107-.053-.158-.084a1.559 1.559 0 0 1-.211-.16z"/></clipPath></defs><g aria-label="JS" style="font-size:88.0353px;font-family:\'Arista Pro Alternate\';-inkscape-font-specification:\'Arista Pro Alternate, Normal\';opacity:1;fill:#dffe04;stroke-width:2.64583;stroke-linecap:square;paint-order:markers fill stroke"><path style="opacity:1;fill:url(#b);fill-opacity:1;stroke-width:2.32576" d="M174.217 101.049c-.611.006-2.086.114-2.867.243-1.798.2-3.41.513-4.644.941a19.559 19.559 0 0 0-2.999 1.325l-.006.003v.001a18.297 18.297 0 0 0-2.755 1.852c-1.662 1.376-3.317 3.038-4.35 4.987-1.002 1.949-1.503 4.112-1.503 6.49 0 2.35.487 4.4 1.461 6.147.974 1.748 2.459 3.253 4.12 4.514 1.663 1.261 3.632 2.129 5.84 2.96 2.273.63 7.94 1.617 10.404 2.132 1.375.402 2.737.817 4.084 1.247 1.16.362 2.08.807 3.032 1.333v-7.987c-1.173-.984-3.11-1.415-4.795-1.9-1.634-.373-4.737-.693-6.285-1.095-1.547-.43-4.7-.946-5.904-1.547-1.204-.63-2.178-1.405-2.923-2.322-.745-.945-1.118-2.12-1.118-3.524 0-1.29.301-2.437.903-3.44a8.142 8.142 0 0 1 2.364-2.578c.975-.688 2.092-1.204 3.353-1.548 1.135-.335 3.51-.571 4.937-.615 1.43.047 3.595.283 4.72.615 1.261.344 2.379.86 3.353 1.548a8.158 8.158 0 0 1 .672.53l.006.005.047.042c.09.08.18.163.266.248l.054.055c.083.082.165.166.244.252l.055.061c.085.095.168.19.25.289l.012.016c.089.109.176.22.26.333l.007.01a9.115 9.115 0 0 1 .492.737c.215.373.325.576.542 1.052l.009.022c.183.432.265.853.34 1.322.038.247-.006.541.048.822.014.085.032.17.051.253l.001.002a4.077 4.077 0 0 0 .196.608c.23.486.516.902.86 1.246.373.372.802.659 1.29.86.071.03.158.056.25.08a3.935 3.876 0 0 0 1.297.22 3.935 3.876 0 0 0 3.935-3.875 3.935 3.876 0 0 0-.063-.689c-.03-.297-.061-.59-.098-.854l-.005-.036a13.007 13.007 0 0 0-1.06-3.472h-.002c-.088-.191-.18-.382-.276-.57-1.032-1.948-2.687-3.61-4.35-4.986-1.69-1.376-3.61-2.436-5.759-3.181-2.067-.717-5.41-1.17-7.717-1.184h-.275zm15.733 21.158c-.545 0-1.06.1-1.547.301-.488.2-.917.488-1.29.86a4.38 4.38 0 0 0-.86 1.247 3.9 3.9 0 0 0-.3 1.547l.01 14.86c-.09 1.486.13 2.97-.625 4.325-1.139 1.88-2.104 2.892-4.1 3.945a9.965 9.965 0 0 0 .77-.467l.058-.04a11.934 11.934 0 0 1-3.115 1.397c-1.347.401-2.725.53-4.127.602l-.301.012v-.016c-.1 0-.199.004-.3.004-1.405 0-3.195-.201-4.542-.602a12.105 12.105 0 0 1-3.115-1.397l.058.04c.08.053.162.105.244.157a7.46 7.46 0 0 1-.142-.065c-.857-.512-1.792-.94-2.37-1.587a5.904 5.904 0 0 1-.582-.65c-.636-1.122-.543-2.591-.7-3.627-.117-2.135-1.997-3.703-3.86-3.742h-.075c-2.132 0-3.86 1.702-3.86 3.802.008 1.582-.164 3.463.367 4.734.086.196.171.381.253.552.644 1.342 1.632 2.59 2.582 3.708l.005.007.009.01c.527.619 1.1 1.203 1.721 1.753 2.052 1.525 4.063 2.409 6.413 3.269 2.071.741 4.695 1.15 7.04 1.23l.125.005c.176.005.352.008.53.01l.006-.001c.065 0 .126.003.192.003 2.665 0 5.159-.415 7.48-1.246 2.35-.86 4.399-2.05 6.147-3.568a17.094 17.094 0 0 0 4.127-5.46c1.031-2.12 1.547-4.427 1.547-6.92 0-.127-.002-.251-.005-.376V126.162c0-1.088-.372-2.02-1.117-2.793-.745-.774-1.984-1.16-2.75-1.16zm-30.81 7.44a3.935 3.876 0 0 0-3.935 3.876 3.935 3.876 0 0 0 3.934 3.876 3.935 3.876 0 0 0 3.935-3.876 3.935 3.876 0 0 0-3.935-3.876z" transform="translate(-238.159 -164.265) scale(1.65174)"/><path style="opacity:1;fill:#000;fill-opacity:1;stroke:red;stroke-width:0;stroke-linecap:square;stroke-dasharray:none;paint-order:markers fill stroke" d="M63.75 103.081c.004.01.009.021.012.035l-.012-.006c-.018-.008.001.04.003.059.005.072.016.188.026.266.007.412-.007.825-.027 1.237-.046.732-.055.978-.136 1.744a34.533 34.533 0 0 1-.91 5.1c-.116.417-.226.835-.348 1.25-.192.648-.45 1.426-.675 2.071a29.169 29.169 0 0 1-.604 1.595c-.09.212-.193.419-.29.628-.189.374-.244.51-.464.853-.118.186-.307.493-.545.556-.055.015-.114.004-.17.006h-.001c-.421-.294-.833-.6-1.236-.919-.218-.182-.441-.358-.655-.546-.793-.697-1.568-1.467-2.07-2.407-.086-.16-.151-.332-.226-.498-.07-.262-.153-.48-.143-.753a.74.74 0 0 1 .263-.542c.04-.032.09-.05.135-.074.05-.013.1-.028.152-.038.377-.066.762-.008 1.132.069.25.065.323.077.566.172.033.013.085.038.138.064.108.076.116.081.375.269.064.046.125.098.193.14.458.275.921.543 1.385.81.044.025.09.049.14.064.036.011.076.009.114.013.068-.047.139-.067.14-.165 0-.073-.105-.21-.133-.249-.151-.212-.206-.27-.383-.485-.327-.39-.657-.778-.97-1.179a8.337 8.337 0 0 1-.517-.717c-.036-.056-.066-.116-.099-.174l-1.345-.598c.538.734 1.131 1.427 1.695 2.142.082.11.168.22.247.335a7.952 7.952 0 0 0-.292-.176c-.645-.367-1.128-.718-1.775-.951-.259-.093-.322-.1-.587-.161-.39-.07-.8-.133-1.194-.05-.058.011-.113.033-.17.05-.052.037-.11.068-.157.112a.955.955 0 0 0-.291.656c-.006.316.086.539.174.842.23.487.287.659.613 1.114.51.712 1.15 1.335 1.8 1.919.207.186.424.362.635.544.476.39.965.764 1.466 1.12.104.075.206.154.316.22 1.43.857.912.714 1.687.89.072-.014.149-.013.216-.043.26-.113.437-.459.56-.691.155-.29.288-.598.423-.897a45.044 45.044 0 0 0 1.072-3.286c.272-.968.37-1.416.61-2.413.435-1.862.759-3.746 1.052-5.634.196.485.407.965.62 1.443.673 1.478 1.394 2.936 2.033 4.43.086.22.25.62.318.864.023.084.046.169.048.255.001.04 0 .1-.037.116-.038.017-.077-.031-.115-.047l-.255-.109c.045.04-.048-.006-.178-.074-.009-.02-.34-.204-.46-.283-.2-.134-.43-.298-.63-.44-.478-.314-.918-.611-1.5-.802-.08-.026-.051.163-.04.245.014.092.07.171.11.255.102.208.265.484.377.68.265.477.534.954.726 1.466.206.551.373 1.155.476 1.732.063.35.093.707.14 1.06.017.366.05.732.05 1.099 0 1.066-.128 2.149-.508 3.152-.31.82-.47.957-.962 1.665-.635.618-.757.826-1.565 1.243-.327.168-.67.313-1.023.414a6.96 6.96 0 0 1-2.51.21c-.493-.049-.972-.18-1.458-.27-1.423-.528-1.857-.597-3.154-1.475-.303-.205-.552-.481-.817-.735-.46-.44-.93-.871-1.356-1.345-.986-1.099-1.19-1.526-1.934-2.72-.07.044-.185.018-.27-.123l-.01-.017c-.083.006-.183-.127-.223-.182a1.419 1.419 0 0 1-.124-.196.411.411 0 0 0-.05-.092 5.833 5.833 0 0 1-.054-.037c-.003 0-.006 0-.007-.004l.004-.002h-.063c-.058 0-.116 0-.173-.002h-.028l.136.246c.812 1.252 1.02 1.676 2.043 2.817 1.272 1.42 1.85 1.81 3.576 2.917a14.16 14.16 0 0 0 1.64.917c.525.245 1.085.406 1.627.61.506.097 1.006.237 1.518.292a7.348 7.348 0 0 0 2.6-.199c.365-.1.72-.245 1.058-.416.827-.418.962-.64 1.612-1.266.509-.747.644-.846.957-1.71.497-1.374.55-2.853.47-4.295-.034-.351-.055-.704-.102-1.053a12.816 12.816 0 0 0-.166-.933 6.915 6.915 0 0 0-.405-1.348c-.066-.155-.149-.302-.224-.453-.07-.139-.142-.277-.213-.416-.122-.23-.222-.41-.33-.643a.5.5 0 0 1-.017-.046l.015.009c.528.315 1.06.624 1.594.93.47.27.457.253.922.468.17.044.393.177.545-.013.09-.112-.032-.412-.058-.484-.072-.198-.317-.742-.389-.904-.693-1.49-1.448-2.952-2.102-4.46-.5-1.188-1.007-2.388-1.237-3.663a4.848 4.848 0 0 1-.068-.702c0-.036.001-.07.003-.106.002-.018.022-.044.007-.053l-.01-.006a.057.057 0 0 1 .014-.022c-.242-.12-.482-.243-.724-.365-.202-.106-.405-.21-.606-.318zm.769 8.83c-.07-.041.141.077.212.116l.101.07-.313-.186zm-7.605.617c-.007-.007.241.136.33.19l.043.029c-.118-.068-.236-.135-.352-.206l-.02-.013zm1.68.856.038.022.004.008-.042-.03zm-9.082 3.374.025.044a.282.282 0 0 1 .06-.006zm.214.385.003.005.009-.003c-.004 0-.008 0-.012-.002z" clip-path="url(#c)" transform="matrix(.3153 0 0 .3153 5.277 19.692)"/><path style="opacity:1;fill:#000;fill-opacity:1;stroke:red;stroke-width:0;stroke-linecap:square;stroke-dasharray:none;paint-order:markers fill stroke" d="m159.019 135.733-.007.003-.01.003s0 0 0 0h0a.098.098 0 0 0-.018.008l-.006.003a.097.097 0 0 0-.037.038.014.014 0 0 0-.002.006s0 0 0 0a.078.078 0 0 0-.015.01c-.007.008-.01.011-.016.021a.047.047 0 0 0 .014.059c.008.006.018.01.027.014.004 0 .008 0 .012.002a.075.075 0 0 0 .011.011l.009.007.012.008a.151.151 0 0 0 .058.017h.017a.154.154 0 0 0 .07-.02.08.08 0 0 0 .04-.055v-.013c0-.009-.002-.017-.003-.026a.055.055 0 0 0-.031-.037.05.05 0 0 0-.025-.03.068.068 0 0 0-.062-.022.088.088 0 0 0-.032-.003l-.003-.003h-.001z" transform="translate(-238.159 -164.265) scale(1.65174)"/></g></svg>\n';

export default function App() {
	const [ htmlString, setHtmlString ] = useState('Even with x<y <i>I am still <strong>Strong!</strong></i>');
	
	return <div id="app">
		<h1 className="m-0">React Parse HTML String Demo!</h1>
		<h3 style={ { margin: 0 } }><strong>v2.1.1</strong></h3>
		<hr className="mt-2" />
		<textarea
			name="ta"
			id="ta"
			value={ htmlString } className="w-full" rows="10"
			onChange={ e => setHtmlString(e.target.value) }
		/>
		<br />
		<br />
		<br />
		<h3 className="m-0">Using&nbsp;
			<span style={ {
				padding: '0.5rem',
				backgroundColor: 'gainsboro',
				color: 'green'
			} }>
				{ '<ParseHTML string={ htmlString } className="demo" />' }
			</span>
		</h3>
		<br />
		<ParseHTML string={ htmlString } className="demo" />
		<hr className="mt-2" />
		<br />
		<h3 className="m-0">Using&nbsp;
			{ '<div dangerouslySetInnerHTML={ { __html: ' }
			&nbsp;<span style={ {
				padding: '0.5rem',
				backgroundColor: 'gainsboro',
				color: 'green'
			} }>
				{ 'parseHTMLString( htmlString )' }
			</span>&nbsp;
			{ '} } />' }
		</h3>
		<br />
		<div dangerouslySetInnerHTML={ { __html: parseHTMLString(htmlString) } } />
		<br />
		<hr />
		<br />
		<button onClick={ () => setHtmlString(jaoSolutionSVGString) }>I Prepared an svg string, want to try loading it?</button>
	</div>;
}
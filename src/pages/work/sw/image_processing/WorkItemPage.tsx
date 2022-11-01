import React from 'react';
import {Container, Image, Link} from '../../WorkItemPageComponents';

import Pic from './assets/1.png';

class WorkItemPage extends React.Component<{}, {}> {
    render() {
        return (
            <Container>
                <h2>Image processing</h2>
                <p>
                    Project made for the "Computer Graphics and Visualisation" course. The GUI was written in WinAPI.
                    Although the GUI is terrible the program was basically for presenting graphical algorithms.
                    It doesn't even handle invalid input.
                </p>

                <Link href={Pic}><Image src={Pic}/></Link>

                <p>
                    The options that the program offers are:
                    <ul>
                        <li>Opening simple PPM files (implementation doesn't allow comments and must be in text format,
                        so if you save your PPM with eg. GIMP you need to save it to text format and delete comment
                        part that begins with # symbol),</li>
                        <li>Creating simple histograms of the picture,</li>
                        <li>Reflecting pictures - X and Y axis,</li>
                        <li>Inverting colors,</li>
                        <li>Putting mask on a picture - after you open your picture that you want to put mask on,
                        you need to type your mask file name to the longer text field (above combine button),
                        then you have to specify which color exactly (in RGB format 0-255) will be transparent
                        to the next 3 text fields,</li>
                        <li>Desaturating picture - simplest equation color=(red+green+blue)/3,</li>
                        <li>Desaturating picture - equation used in PAL color space video standard color=0.299*red+0.587*green+0.114*blue,</li>
                        <li>Filter masks:</li>
                        <ul>
                            <li>Sobel's gradient</li>
                            <li>Robert's gradient</li>
                            <li>Prewitt's gradient</li>
                            <li>Laplace's mask</li>
                            <li>Detecting horizontal, vertical lines as well as bevels,</li>
                            <li>Convolution mask</li>
                        </ul>
                        <li>Adjusting contrast, brightness and gamma,</li>
                        <li>Converting to sepia,</li>
                        <li>Simple halftone approximation (values 0-255),</li>
                        <li>Halftone approximation using Floyd-Steinberg algorithm (values 0-255)</li>
                        <li>Resizing algorithms (type resolution - width and height - to the text fields on the left of the button):</li>
                        <ul>
                            <li>Nearest neighbour method</li>
                            <li>Bilinear interpolation</li>
                            <li>Biquadratic interpolation</li>
                            <li>Bicubic interpolation</li>
                        </ul>
                    </ul>
                </p>
                <h3>Usage:</h3>
                <p>
                    Type ppm file name into first (on the top left) edit field and click load image. Now you are able to use filters on it.
                </p>
                <p>
                    The "Combine" button has 4 additional edit fields above it. To the first edit field (on the top) you write ppm file name which is used as a mask to combine it with the original file. The three field below are used to specify which color has to be the transparent one. The picutre1.ppm is a "normal" picture file and the picture2.ppm is a alpha texture. If you want to test this option then load the picture1.ppm, type picture2.ppm above the Combine, and set the the other fields to 0 and the click Combine. Yes, I have screw up that.
                </p>
                <p>
                    The halftone approximation and floyd-steinberg algorithms takes as an input value from 0 to 255.
                </p>
                <p>
                    Download link: <Link href="/work_archives/image_processing/ppm.rar">ppm.rar</Link>.
                </p>
            </Container>
        );
    }
}

export default WorkItemPage;
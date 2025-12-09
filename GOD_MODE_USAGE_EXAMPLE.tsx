// 🔥 GOD MODE VISUAL SUPERNOVA - Usage Examples

import executeUltraSOTA from './ULTRA_SOTA_COMPLETE_EXAMPLE';

// =============================================================================
// EXAMPLE 1: Standard ULTRA SOTA Mode (WordPress, CMS)
// =============================================================================

export async function generateStandardContent() {
    const result = await executeUltraSOTA({
        keyword: "Best Running Shoes 2025",
        existingPages: sitemapPages,
        aiClient: anthropicClient,
        model: "claude-3-5-sonnet-20241022",
        serperApiKey: process.env.SERPER_API_KEY!,
        serpData: serpResults,
        mode: 'generate',
        useGodMode: false, // Standard mode - clean HTML5 with inline styles
        onProgress: (msg) => console.log(msg)
    });

    console.log(`✅ Generated ${result.content.length} chars`);
    console.log(`📊 Quality Score: ${result.qualityReport.score}%`);
    console.log(`📚 References: ${result.references.length}`);
    console.log(`🔗 Semantic Keywords: ${result.semanticKeywords.length}`);

    // Output: Clean HTML5 with inline styles
    // Perfect for WordPress, traditional CMS
    return result.content;
}

// =============================================================================
// EXAMPLE 2: GOD MODE VISUAL SUPERNOVA (Modern Frameworks)
// =============================================================================

export async function generateGodModeContent() {
    const result = await executeUltraSOTA({
        keyword: "Best Running Shoes 2025",
        existingPages: sitemapPages,
        aiClient: anthropicClient,
        model: "claude-3-5-sonnet-20241022",
        serperApiKey: process.env.SERPER_API_KEY!,
        serpData: serpResults,
        mode: 'generate',
        useGodMode: true, // 🔥 GOD MODE ACTIVATED
        existingContent: '', // No existing content for new generation
        onProgress: (msg, details) => {
            console.log(msg);
            if (msg.includes('GOD MODE')) {
                console.log('🔥🔥🔥 VISUAL SUPERNOVA ENGAGED 🔥🔥🔥');
            }
        }
    });

    console.log(`✅ Generated ${result.content.length} chars`);
    console.log(`📊 Quality Score: ${result.qualityReport.score}%`);
    console.log(`📚 References: ${result.references.length}`);
    console.log(`🎨 Visual Classes: glass-panel, neumorphic-card, text-gradient-primary`);

    // Output: HTML5 with Tailwind Visual Supernova classes
    // Perfect for React, Next.js, Vue, modern frameworks
    return result.content;
}

// =============================================================================
// EXAMPLE 3: Content Refresh with GOD MODE (Preserve Images)
// =============================================================================

export async function refreshWithGodMode(originalHTML: string) {
    const result = await executeUltraSOTA({
        keyword: "Best Running Shoes 2025",
        existingPages: sitemapPages,
        aiClient: anthropicClient,
        model: "claude-3-5-sonnet-20241022",
        serperApiKey: process.env.SERPER_API_KEY!,
        serpData: serpResults,
        mode: 'refresh',
        useGodMode: true, // 🔥 GOD MODE + Image Preservation
        existingContent: originalHTML, // Extract and preserve images
        onProgress: (msg) => console.log(msg)
    });

    console.log(`✅ Refreshed content with GOD MODE`);
    console.log(`📸 Preserved Images: ${result.preservedImages || 0}`);
    console.log(`📊 Quality Score: ${result.qualityReport.score}%`);
    console.log(`🎨 Visual Supernova Applied`);

    // Output: Refreshed HTML with:
    // - All original images preserved
    // - Tailwind Visual Supernova classes
    // - Updated 2025 data
    // - Enhanced with information gain
    return result.content;
}

// =============================================================================
// EXAMPLE 4: Batch Processing (Multiple Articles)
// =============================================================================

export async function generateMultipleArticles(topics: string[], useGodMode: boolean = false) {
    const results = [];

    for (const topic of topics) {
        console.log(`\n🚀 Generating: ${topic}`);

        const result = await executeUltraSOTA({
            keyword: topic,
            existingPages: sitemapPages,
            aiClient: anthropicClient,
            model: "claude-3-5-sonnet-20241022",
            serperApiKey: process.env.SERPER_API_KEY!,
            serpData: await fetchSERPData(topic),
            mode: 'generate',
            useGodMode: useGodMode,
            onProgress: (msg, details) => {
                if (details?.step) {
                    console.log(`  Step ${details.step}/${details.total}: ${msg}`);
                }
            }
        });

        results.push({
            topic,
            content: result.content,
            qualityScore: result.qualityReport.score,
            references: result.references.length,
            keywords: result.semanticKeywords.length
        });

        console.log(`✅ Completed: ${topic} (Quality: ${result.qualityReport.score}%)`);

        // Wait 2 seconds between requests to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    return results;
}

// =============================================================================
// EXAMPLE 5: A/B Testing (Standard vs GOD MODE)
// =============================================================================

export async function compareModes(topic: string) {
    console.log('🔬 A/B Test: Standard SOTA vs GOD MODE\n');

    // Generate Standard SOTA
    console.log('📝 Generating Standard SOTA...');
    const standardResult = await executeUltraSOTA({
        keyword: topic,
        existingPages: sitemapPages,
        aiClient: anthropicClient,
        model: "claude-3-5-sonnet-20241022",
        serperApiKey: process.env.SERPER_API_KEY!,
        serpData: serpResults,
        mode: 'generate',
        useGodMode: false
    });

    // Generate GOD MODE
    console.log('🔥 Generating GOD MODE...');
    const godModeResult = await executeUltraSOTA({
        keyword: topic,
        existingPages: sitemapPages,
        aiClient: anthropicClient,
        model: "claude-3-5-sonnet-20241022",
        serperApiKey: process.env.SERPER_API_KEY!,
        serpData: serpResults,
        mode: 'generate',
        useGodMode: true
    });

    // Compare Results
    console.log('\n📊 Comparison Results:');
    console.log('─'.repeat(60));
    console.log(`Metric                  | Standard    | GOD MODE`);
    console.log('─'.repeat(60));
    console.log(`Quality Score          | ${standardResult.qualityReport.score}%       | ${godModeResult.qualityReport.score}%`);
    console.log(`Content Length         | ${standardResult.content.length}     | ${godModeResult.content.length}`);
    console.log(`Semantic Keywords      | ${standardResult.semanticKeywords.length}         | ${godModeResult.semanticKeywords.length}`);
    console.log(`References             | ${standardResult.references.length}          | ${godModeResult.references.length}`);
    console.log(`Visual Classes         | No          | Yes (Tailwind)`);
    console.log('─'.repeat(60));

    return {
        standard: standardResult,
        godMode: godModeResult
    };
}

// =============================================================================
// EXAMPLE 6: Full Pipeline with All Features
// =============================================================================

export async function fullPipeline(topic: string, originalHTML?: string) {
    console.log(`🚀 Starting Full ULTRA SOTA Pipeline for: ${topic}\n`);

    const isRefresh = !!originalHTML;
    const mode = isRefresh ? 'refresh' : 'generate';

    const result = await executeUltraSOTA({
        keyword: topic,
        existingPages: sitemapPages,
        aiClient: anthropicClient,
        model: "claude-3-5-sonnet-20241022",
        serperApiKey: process.env.SERPER_API_KEY!,
        serpData: await fetchSERPData(topic),
        neuronData: await fetchNeuronData(topic),
        recentNews: await fetchRecentNews(topic),
        mode: mode,
        useGodMode: true, // Always use GOD MODE for maximum impact
        existingContent: originalHTML || '',
        onProgress: (msg, details) => {
            const prefix = details?.step ? `[${details.step}/${details.total}]` : '[INFO]';
            console.log(`${prefix} ${msg}`);
        }
    });

    // Post-Processing
    console.log('\n✅ Generation Complete!');
    console.log('─'.repeat(60));
    console.log(`📊 Quality Score: ${result.qualityReport.score}%`);
    console.log(`📝 Word Count: ${result.metadata?.wordCount || 'N/A'}`);
    console.log(`🔑 Semantic Keywords: ${result.semanticKeywords.length}`);
    console.log(`🔗 Internal Links: ${result.metadata?.internalLinks || 'N/A'}`);
    console.log(`📚 Validated References: ${result.references.length}`);
    console.log(`📸 Preserved Images: ${result.preservedImages || 0}`);
    console.log(`🎯 Competitor Gaps Addressed: ${result.gapAnalysis.gaps.length}`);
    console.log(`🎨 Visual Supernova Classes: ✅`);
    console.log('─'.repeat(60));

    // Quality Report
    if (result.qualityReport.passed) {
        console.log('✅ APPROVED FOR PUBLISHING');
    } else {
        console.log('⚠️ NEEDS REVISION');
        console.log('\nRecommendations:');
        result.qualityReport.recommendations.forEach(rec => {
            console.log(`  • ${rec}`);
        });
    }

    return result;
}

// =============================================================================
// Helper Functions
// =============================================================================

async function fetchSERPData(keyword: string) {
    // Implement your SERP API call
    return [];
}

async function fetchNeuronData(keyword: string) {
    // Implement your NeuronWriter API call
    return null;
}

async function fetchRecentNews(keyword: string) {
    // Implement your news API call
    return null;
}

// Mock data for examples
const sitemapPages = [
    { title: "Running Shoe Buying Guide", slug: "running-shoe-buying-guide" },
    { title: "Best Training Plans", slug: "best-training-plans" },
    { title: "Marathon Preparation Tips", slug: "marathon-preparation" }
];

const serpResults = [
    {
        title: "Top Running Shoes 2024",
        link: "https://example.com/top-shoes",
        snippet: "Comprehensive review of top running shoes..."
    }
];

const anthropicClient = null; // Replace with your actual client

// =============================================================================
// Usage Examples
// =============================================================================

// Example 1: Standard Content
// const standard = await generateStandardContent();

// Example 2: GOD MODE Content
// const godMode = await generateGodModeContent();

// Example 3: Refresh with Image Preservation
// const refreshed = await refreshWithGodMode(originalHTML);

// Example 4: Batch Processing
// const batch = await generateMultipleArticles(['topic1', 'topic2'], true);

// Example 5: A/B Testing
// const comparison = await compareModes('Best Running Shoes 2025');

// Example 6: Full Pipeline
// const complete = await fullPipeline('Best Running Shoes 2025', originalHTML);

export default {
    generateStandardContent,
    generateGodModeContent,
    refreshWithGodMode,
    generateMultipleArticles,
    compareModes,
    fullPipeline
};
